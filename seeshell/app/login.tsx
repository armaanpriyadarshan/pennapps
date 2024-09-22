import { ImageBackground, View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Coustard_400Regular } from '@expo-google-fonts/dev';
import { MaterialIcons } from '@expo/vector-icons';

const LogIn = () => {
    let [fontsLoaded] = useFonts({
        Coustard_400Regular
    });

    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ImageBackground source={require('../assets/images/background.png')} resizeMode='cover' style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.header}>
                    <MaterialIcons name='arrow-back' size={24} color='#071a2b' style={styles.arrow} onPress={() => navigation.navigate('Map')} />
                        <Text style={styles.title}>Log In</Text>
                    </View>
                    <View>
                        <Text>Email</Text>
                        <TextInput 
                            style={styles.input}
                        />
                        <Text>Password</Text>
                        <TextInput 
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.submit}>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>
                        <Text>Don't have an account? Sign Up</Text>
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