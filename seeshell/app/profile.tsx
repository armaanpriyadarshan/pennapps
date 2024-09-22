import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const Profile = () => {
  return (
    <View>
      <ImageBackground source={require("../assets/images/background.png")} resizeMode="cover" style={styles.imgBackground}>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.title}>Profile</Text>
          </View>

          <View style={styles.profile}>
            <Image 
            style={styles.profile_image}
            source={{
              uri: "https://cdn.discordapp.com/attachments/828639190332997642/1287143624324419634/image.png?ex=66f0796a&is=66ef27ea&hm=5b90044883789f6b7f58496d711cde3e19e373d6ad1ef4f8c22972aa510de87f&"
            }}>
          </Image>
          <View style={styles.profile_text}>
            <Text style={styles.heading}>Muzu Priyadarshan</Text>
            <View style={styles.profile_info}>
              <Text style={styles.info}>X/X Shells</Text>
              <Text style={styles.info}>X/X Trips</Text>
            </View>
          </View>
          </View>
        </View>

        <View style={[styles.container, styles.case]}>
            <Image style={styles.badge} source={require("../assets/images/badges/locked/locked1.png")}></Image>
            <Image style={styles.badge} source={require("../assets/images/badges/locked/locked2.png")}></Image>
            <Image style={styles.badge} source={require("../assets/images/badges/locked/locked3.png")}></Image>
            <Image style={styles.badge} source={require("../assets/images/badges/locked/locked4.png")}></Image>
            <Image style={styles.badge} source={require("../assets/images/badges/locked/locked5.png")}></Image>
            <Image style={styles.badge} source={require("../assets/images/badges/locked/locked6.png")}></Image>
            <Image style={styles.badge} source={require("../assets/images/badges/locked/locked7.png")}></Image>
            <Image style={styles.badge} source={require("../assets/images/badges/locked/locked8.png")}></Image>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    height: "100%",
  },

  container: {
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "white",
    borderRadius: 25,
    margin: 20,
    paddingLeft: 15,
    paddingRight: 15
  },

  section: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    paddingTop: 10,
    paddingBottom: 10,
  },

  title: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  heading: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10
  },

  profile: {
    flexDirection: "row",
    alignItems: "stretch",
    alignContent: "stretch",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    paddingTop: 10,
    paddingBottom: 10,
  },

  profile_text: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 18,
    paddingLeft: 10
  },

  profile_info: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  info: {
    backgroundColor: "#2C9A9332",
    borderColor: "#2C9A93",
    color: "#2C9A93",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
    padding: 3,
    overflow: "hidden"
  },

  profile_image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  case: {
    backgroundColor: "#242424",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    shadowColor: "white",
    shadowOpacity: 0.75,
    shadowRadius: 20,
    zIndex:999
  },

  badge: {
    resizeMode: "contain",
    width: 75,
    maxHeight: 100
  }
});

export default Profile;