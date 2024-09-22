import { useState } from 'react';
import { ImageBackground, View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/contexts/AuthContext';
import { useFonts, Coustard_400Regular } from '@expo-google-fonts/dev';
import { MaterialIcons } from '@expo/vector-icons';

const LogIn = () => {
    let [fontsLoaded] = useFonts({
        Coustard_400Regular
    });

    const { logIn } = useAuth();

    const navigation = useNavigation();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogIn = async () => {
        try {
            await logIn(email, password);
            navigation.navigate('Map');
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ImageBackground source={require('../assets/images/background.png')} resizeMode='cover' style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.header}>
                    <MaterialIcons name='arrow-back' size={24} color='#071a2b' style={styles.arrow} onPress={() => navigation.goBack()} />
                        <Text style={styles.title}>Log In</Text>
                    </View>
                    <View>
                        <Text>Email</Text>
                        <TextInput 
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Text>Password</Text>
                        <TextInput 
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.submit}>
                        <Pressable style={styles.button} onPress={handleLogIn}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>
                        <Text>Don't have an account? <Text style={{ color: '#00a3ff' }} onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text></Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 20,
        width: '80%',
        gap: 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        paddingBottom: 5
    },

    arrow: {
        position: 'absolute',
        left: 0,
        top: 5
    },

    title: {
        fontFamily: 'Coustard_400Regular',
        fontSize: 24,
        color: '#071a2b'
    },

    input: {
        backgroundColor: '#0000000c',
        marginBottom: 15,
        padding: 8,
        borderRadius: 5,
    },

    submit: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#4ebeb7',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderRadius: 12
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    }
});

export default LogIn;