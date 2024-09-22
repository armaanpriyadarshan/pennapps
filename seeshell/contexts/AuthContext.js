import React, { createContext, useContext, useReducer } from 'react';
import { logIn as logInAPI } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload, isAuthenticated: true };
        case 'LOGOUT':
            return { ...state, user: null, isAuthenticated: false };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthenticated: false,
    });

    const logIn = async (email, password) => {
        try {
            const user = await logInAPI(email, password);
            await AsyncStorage.setItem('user', JSON.stringify(user));
            await AsyncStorage.setItem('isAuthenticated', 'true');
            dispatch({ type: 'LOGIN', payload: user });
            return user;
        } catch (error) {
            throw error;
        }
    };

    const logOut = async () => {
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('isAuthenticated');
        dispatch({ type: 'LOGOUT' });
    };

    const loadUserData = async () => {
        const userData = await AsyncStorage.getItem('user');
        const isAuthenticated = await AsyncStorage.getItem('isAuthenticated') === 'true';
        if (userData) {
            dispatch({ type: 'LOGIN', payload: JSON.parse(userData) });
        }
        dispatch({ type: 'SET_AUTHENTICATION', payload: isAuthenticated });
    };

    React.useEffect(() => {
        loadUserData();
    }, []);

    return (
        <AuthContext.Provider value={{ state, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;