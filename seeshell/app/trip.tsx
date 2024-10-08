import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Modal, Button } from 'react-native';
import ColorPicker, { Panel1, HueSlider } from 'reanimated-color-picker';
import { useAuth } from '@/contexts/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Coustard_400Regular } from '@expo-google-fonts/dev';

const Trip = () => {
  let [fontsLoaded] = useFonts({
      Coustard_400Regular
  });

  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#E6E6E6');

  const [images, setImages] = useState<string[]>([]);

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset) => asset.uri);
      setImages(selectedImages);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  const getCurrentLocation = async () => {
    try {
      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    } catch (error) {
      setErrorMsg('Unable to fetch location');
      console.log(error);
    }
  };

  const onSelectColor = (color: { hex: string }) => {
    setSelectedColor(color.hex);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.title, styles.section]}>
        <Text style={styles.trip}>New Trip</Text>
      </View>
      <View style={[styles.profile_info, styles.section]}>
        <Image 
          style={styles.profile_image}
          source={{
            uri: "https://cdn.discordapp.com/attachments/828639190332997642/1287143624324419634/image.png?ex=66f0796a&is=66ef27ea&hm=5b90044883789f6b7f58496d711cde3e19e373d6ad1ef4f8c22972aa510de87f&"
          }}>
        </Image>
        <View style={styles.profile_text}>
          <Text style={styles.field}>Name</Text>
          <Text style={styles.value}>Armaan Priyadarshan</Text>
          <Text style={styles.field}>Date</Text>
          <Text style={styles.value}>{currentDate()}</Text>
        </View>
      </View>

      <View style={[styles.location_section, styles.section]}>
        <Text style={styles.heading}>Location</Text>
        <Pressable style={styles.location_button}><Text style={styles.location_button_text} onPress={getCurrentLocation}>Use Current Location</Text></Pressable>
      </View>
      
      <Text style={styles.heading}>Icon</Text>
      <View style={[styles.section, styles.icon_customize]}>

        <View style={styles.shellSelect}>
          <Text>Shell</Text>
          <View style={styles.shellTypes}>
            <Pressable style={styles.shellType}>
              <Image style={styles.shell} source={require('../assets/images/shells/shell1.png')}></Image>
            </Pressable>
            <Pressable style={styles.shellType}>
              <Image style={styles.shell} source={require('../assets/images/shells/shell2.png')}></Image>
            </Pressable>
            <Pressable style={styles.shellType}>
              <Image style={styles.shell} source={require('../assets/images/shells/shell3.png')}></Image>
            </Pressable>
            <Pressable style={styles.shellType}>
              <Image style={styles.shell} source={require('../assets/images/shells/shell4.png')}></Image>
            </Pressable>
            <Pressable style={styles.shellType}>
              <Image style={styles.shell} source={require('../assets/images/shells/shell5.png')}></Image>
            </Pressable>
            <Pressable style={styles.shellType}>
              <Image style={styles.shell} source={require('../assets/images/shells/shell6.png')}></Image>
            </Pressable>
            <Pressable style={styles.shellType}>
              <Image style={styles.shell} source={require('../assets/images/shells/shell7.png')}></Image>
            </Pressable>
          </View> 
        </View>
        <View style={styles.colorSelect}>
          <Text>Color</Text>
          <Pressable style={[styles.color, { backgroundColor: selectedColor }]} onPress={() => setShowColorPicker(true)} />
        </View>

        <Modal transparent visible={showColorPicker} animationType="slide">
          <View>
            <ColorPicker style={styles.colorPicker} value={selectedColor} onComplete={onSelectColor}>
              <Panel1 />
              <HueSlider />
            </ColorPicker>
            <Button title="Ok" onPress={() => setShowColorPicker(false)} />
          </View>
      </Modal>
      </View>
      <Text style={styles.heading}>Photos</Text>
      {images.length > 0 ? (
        <View style={styles.photoContainer}>
          {images.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.thumbnail} />
          ))}
          <Ionicons name="checkmark-circle" size={40} color="#071a2b" />
        </View>
      ) : (
        <Pressable style={styles.photoSelect} onPress={() => pickImages()}>
          <Text style={styles.photoSelectText}>+</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "stretch",
      padding: 12,
      gap: 6
    },

    section: {
      borderBottomWidth: 1,
      borderBottomColor: "#D9D9D9",
      paddingTop: 10,
      paddingBottom: 10
    },

    title: {
      justifyContent: "center",
      alignItems: "center",
    },

    trip: {
      fontFamily: "Coustard_400Regular",
      fontSize: 24,
      color: "#071A2B"
    },

    heading: {
      fontWeight: "bold",
      fontSize: 18,
    },

    profile_info: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly"
    },

    profile_image: {
      width: 120,
      height: 120,
      borderRadius: 60,
      transform: [{rotate: '45deg'}],
    },

    field: {
      fontWeight: "bold",
      fontSize: 13,
      marginTop: 10
    },

    value: {
      fontSize: 16,
      marginBottom: 10
    },

    profile_text: {
      flexDirection: "column",
      justifyContent: "center"
    },

    location_section: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    },

    location_button: {
      backgroundColor: "#4EBEB7",
      padding: 15,
      borderRadius: 50
    },

    location_button_text: {
      color: "white"
    },

    icon_customize: {
      flexDirection: "column",
      alignContent: "stretch",
      padding: 5,
      gap: 20
    },

    shellSelect: {
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center"
    },

    shellTypes: {
      flexDirection: "row",
      justifyContent: "center"
    },

    shellType: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000",
      margin: 7,
      width: 36,
      height: 36,
      borderRadius: 18,
    },

    shell: {
      width: 20,
      height: 20,
      borderRadius: 10
    },
    
    colorSelect: {
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
    },

    color: {
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "#E6E6E6",
      margin: 7,
      marginLeft: 13,
      marginRight: 13,
      borderColor: "black",
      borderWidth: 0.5
    },

    colorPicker: {
      marginTop: '60%',
    },

    photoSelect: {
      height: 100,
      borderRadius: 10,
      backgroundColor: "#E2E2E2",
      borderColor: "#BBBBBB",
      borderWidth: 2,
      alignItems: "stretch"
    },

    photoSelectText: {
      color: "#BBBBBB",
      fontSize: 70,
      textAlign: "center"
    },

    photoContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 8,
    },

    thumbnail: {
      width: 60,
      height: 60,
      borderRadius: 5,
      margin: 5
    }
  });

const currentDate=()=>{

  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return month + "/" + day + "/" + year;
}

export default Trip;