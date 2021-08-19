import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { Colors, Size } from "../Styles";
const Header = () => {
  return (
    <View style={styles.header}>


    <Text style = {{fontWeight:'bold', fontSize:25, top:50, color:'white'}}>
        COUNSELLING-MATE
    </Text>








      <Image source={require("../../assets/logo.png")} style={styles.Avatar} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: Size.width,

    height: 130,
    
    backgroundColor: Colors.darkblue,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  Avatar: {
    top: 60,
    height: 120,
    width: 120,
    borderRadius: 120,
  },
});
