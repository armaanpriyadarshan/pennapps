import { useState } from 'react';
import { Modal, View, Text, Image, StyleSheet, Pressable, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Marker } from 'react-native-maps';

interface BeachMarkerProps {
    badge: any;
    name: string;
    latitude: number;
    longitude: number;
    description: string;
}

const BeachMarker: React.FC<BeachMarkerProps> = ({ badge, name, latitude, longitude, description }) => {
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
                    <Text>{name}</Text>
                    <Text>{description}</Text>
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
        paddingVertical: '10%',
        paddingHorizontal: '5%',
        gap: 10,
        borderRadius: 10,
    },

    close: {
        position: 'absolute',
        top: 10,
        right: 10
    },

    badge: {
        width: 150,
        height: 153,
        marginBottom: 10
    }
});

export default BeachMarker;