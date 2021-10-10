import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Colors, Size } from "../Constants/Styles";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "react-native-vector-icons";

const Login = (props) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [selected, setSelected] = useState("");
  return (
    <View style={styles.container}>
      {/* <View style={{ paddingBottom: 50 }}>
        <Text
          style={{ fontWeight: "bold", fontSize: 22, color: Colors.darkblue }}
        >
          Login as a guest!
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor:
            selected === "email" ? Colors.darkblue : "darkgrey",
          width: "70%",
        }}
      >
        <MaterialCommunityIcons
          name="email-outline"
          size={22}
          color={selected === "email" ? Colors.darkblue : "darkgrey"}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="darkgrey"
          style={{ paddingLeft: 5, padding: 10, fontSize: 16, width: "70%" }}
          placeholderTextColor={
            selected === "email" ? Colors.darkblue : "darkgrey"
          }
          keyboardType="email-address"
          onFocus={() => {
            setSelected("email");
          }}
          onBlur={() => {
            setSelected("");
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor:
            selected === "password" ? Colors.darkblue : "darkgrey",
          width: "70%",
          paddingTop: 20,
        }}
      >
        <MaterialCommunityIcons
          name="account-lock-outline"
          size={22}
          color={selected === "password" ? Colors.darkblue : "darkgrey"}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="darkgrey"
          style={{ paddingLeft: 5, padding: 10, fontSize: 16, flex: 1 }}
          keyboardType="default"
          secureTextEntry={isSecureEntry}
          placeholderTextColor={
            selected === "password" ? Colors.darkblue : "darkgrey"
          }
          onFocus={() => {
            setSelected("password");
          }}
          onBlur={() => {
            setSelected("");
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setIsSecureEntry(!isSecureEntry);
          }}
        >
          {isSecureEntry ? (
            <Entypo name="eye" size={24} color="darkgrey" />
          ) : (
            <Entypo name="eye-with-line" size={24} color="darkgrey" />
          )}
        </TouchableOpacity>
      </View>
      <View style={{ width: "70%", alignItems: "flex-end", paddingTop: 10 }}>
        <TouchableOpacity>
          <Text style={{ color: Colors.darkblue, fontWeight: "700" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={{ color: Colors.darkblue }}>Login</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={14}
          color={Colors.darkblue}
          style={{}}
        />
      </TouchableOpacity>

      <View style={{ flexDirection: "row", paddingTop: 20 }}>
        <Text style={{ fontSize: 14, color: Colors.darkblue }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
          <Text
            style={{ fontSize: 15, fontWeight: "bold", color: Colors.darkblue }}
          >
            {""} SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 100,
    alignItems: "center",
  },
  button: {
    width: "60%",
    height: 50,
    backgroundColor: Colors.lightblue,
    borderRadius: 50,
    alignItems: "center",
    elevation: 5,
    justifyContent: "center",
    marginTop: 30,
    flexDirection: "row",
  },
});
