import { useState } from 'react';
import { Modal, View, Text, Image, StyleSheet, Pressable, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Marker } from 'react-native-maps';
import { useFonts, Coustard_400Regular } from '@expo-google-fonts/dev';

interface BeachMarkerProps {
    badge: any;
    name: string;
    latitude: number;
    longitude: number;
    description: string;
}

const BeachMarker: React.FC<BeachMarkerProps> = ({ badge, name, latitude, longitude, description }) => {
    let [fontsLoaded] = useFonts({
        Coustard_400Regular,
    });

    const [modalVisible, setModalVisible] = useState(false);
    const hideModal = () => setModalVisible(false);

    return (
        <View>
            <Marker
                coordinate={{ latitude: latitude, longitude: longitude  }}
                onPress={() => setModalVisible(true)}
                image={badge}
                pinColor='#ffffff'
            >
            </Marker>
            <Modal 
                visible={modalVisible}
                animationType='slide'
                transparent={true}
                onRequestClose={hideModal}
            >
                <View style={styles.container}>
                    <Pressable onPress={hideModal} style={styles.close}>
                        <MaterialIcons name='close' color='#071a2b' size={30} />
                    </Pressable>
                    <Image source={badge} style={styles.badge} />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: '50%',
        marginHorizontal: 20,
        paddingVertical: '10%',
        paddingHorizontal: 20,
        gap: 20,
        borderRadius: 10,
    },

    close: {
        position: 'absolute',
        top: 10,
        right: 10
    },

    badge: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#071a2b',
        fontFamily: 'Coustard_400Regular',
    },

    description: {
        fontSize: 16,
        color: '#071a2b',
    }
});

export default BeachMarker;