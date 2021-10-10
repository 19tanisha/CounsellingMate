import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import ArticleCarousel from "../Constants/Components/ArticleCarousel";
import CounsellorFlatlist from "../Constants/Components/CounsellorFlatlist";
import { Size, Colors, Font } from "../Constants/Styles";
import { Entypo, FontAwesome } from "react-native-vector-icons";
const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <View style={{ width: "20%" }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.Avatar}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.SOS}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            SOS Calling
          </Text>
        </TouchableOpacity>
      </View>

      <ArticleCarousel />

      <Text style={styles.counsellor}>Counselling Buddies</Text>

      <CounsellorFlatlist />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Avatar: {
    padding: Size.padding,
    height: 40,
    width: 40,
    borderRadius: 120,
  },

  container: {
    flex: 1,
    //paddingTop:40,
    padding: Size.padding,
  },

  counsellor: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.darkblue,
    marginBottom: 5,
  },

  SOS: {
    backgroundColor: "red",
    height: 40,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 30,
  },
});
