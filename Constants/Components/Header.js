import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { Colors, Size } from "../Styles";
const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../../assets/Logo.jpeg")} style={styles.Avatar} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: Size.width,

    height: 130,

    backgroundColor: Colors.darkblue,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  Avatar: {
    top: 50,
    height: 120,
    width: 120,
    borderRadius: 120,
  },
});
