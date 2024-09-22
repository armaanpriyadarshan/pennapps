import { useState } from 'react';
import { ImageBackground, View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/contexts/AuthContext';
import { signUp } from '@/api';
import { useFonts, Coustard_400Regular } from '@expo-google-fonts/dev';
import { MaterialIcons } from '@expo/vector-icons';

const SignUp = () => {
    let [fontsLoaded] = useFonts({
        Coustard_400Regular
    });

    const navigation = useNavigation();

    const { logIn } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
            await signUp(name, email, password);
            navigation.navigate('Log In');
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
                        <Text style={styles.title}>Sign Up</Text>
                    </View>
                    <View>
                        <Text>Name</Text>
                        <TextInput 
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                        />
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
                        />
                    </View>
                    <View style={styles.submit}>
                        <Pressable style={styles.button} onPress={handleSignUp}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>
                        <Text>Already have an account? <Text style={{ color: '#00a3ff' }} onPress={() => navigation.navigate('Log In')}>Log In</Text></Text>
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

export default SignUp;