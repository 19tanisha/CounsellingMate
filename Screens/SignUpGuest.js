import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  CheckBox,
  ToastAndroid,
} from "react-native";
import { Colors, Size } from "../Constants/Styles";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  Entypo,
} from "react-native-vector-icons";
import Header from "../Constants/Components/Header";
const SignUp = (props) => {
  const androidToast = () => {
    if (isSelected) {
      props.navigation.navigate("Home");
    } else {
      ToastAndroid.show("Check Terms & Conditions", 3000);
    }
  };
  const [selected, setSelected] = useState();
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ margin: 30 }}>
        <Text
          style={{ fontWeight: "bold", fontSize: 22, color: Colors.darkblue }}
        >
          Sign-Up as a Guest!
        </Text>
      </View>
      <ScrollView
        style={{ width: "100%", flex: 1 }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 2,
            borderBottomColor:
              selected === "name" ? Colors.darkblue : "darkgrey",
            width: "70%",
            paddingTop: 20,
          }}
        >
          <SimpleLineIcons name="pencil" size={18} color="darkgrey" />
          <TextInput
            placeholder="Name"
            placeholderTextColor="darkgrey"
            style={{ paddingLeft: 5, padding: 10, fontSize: 16, width: "70%" }}
            onFocus={() => {
              setSelected("name");
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
              selected === "dob" ? Colors.darkblue : "darkgrey",
            width: "70%",
            paddingTop: 20,
          }}
        >
          <MaterialCommunityIcons
            name="account-lock-outline"
            size={22}
            color="darkgrey"
          />
          <View>
            <TextInput
              placeholder="Date Of Birth"
              placeholderTextColor="darkgrey"
              style={{
                paddingLeft: 5,
                padding: 10,
                fontSize: 16,
                width: "70%",
              }}
              onFocus={() => {
                setSelected("dob");
              }}
              onBlur={() => {
                setSelected("");
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 2,
            borderBottomColor:
              selected === "number" ? Colors.darkblue : "darkgrey",
            width: "70%",
            paddingTop: 20,
          }}
        >
          <SimpleLineIcons name="phone" size={22} color="darkgrey" />
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="darkgrey"
            style={{ paddingLeft: 5, padding: 10, fontSize: 16, width: "70%" }}
            keyboardType="numeric"
            onFocus={() => {
              setSelected("number");
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
              selected === "email" ? Colors.darkblue : "darkgrey",
            width: "70%",
            paddingTop: 20,
          }}
        >
          <MaterialCommunityIcons
            name="email-outline"
            size={22}
            color="darkgrey"
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="darkgrey"
            style={{ paddingLeft: 5, padding: 10, fontSize: 16, width: "70%" }}
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
              selected === "email" ? Colors.darkblue : "darkgrey",
            width: "70%",
            paddingTop: 20,
          }}
        >
          <Entypo name="location-pin" size={22} color="darkgrey" />
          <TextInput
            placeholder="Location"
            placeholderTextColor="darkgrey"
            style={{ paddingLeft: 5, padding: 10, fontSize: 16, width: "70%" }}
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
              selected === "setpass" ? Colors.darkblue : "darkgrey",
            width: "70%",
            paddingTop: 20,
          }}
        >
          <MaterialCommunityIcons
            name="account-lock-outline"
            size={22}
            color="darkgrey"
          />
          <TextInput
            placeholder="Set Password"
            placeholderTextColor="darkgrey"
            style={{ paddingLeft: 5, padding: 10, fontSize: 16, width: "70%" }}
            keyboardType="visible-password"
            onFocus={() => {
              setSelected("setpass");
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
              selected === "setpass" ? Colors.darkblue : "darkgrey",
            width: "70%",
            paddingTop: 20,
          }}
        >
          <MaterialCommunityIcons
            name="account-lock-outline"
            size={22}
            color="darkgrey"
          />
          <TextInput
            placeholder="Set Password"
            placeholderTextColor="darkgrey"
            style={{ paddingLeft: 5, padding: 10, fontSize: 16, width: "70%" }}
            keyboardType="visible-password"
            onFocus={() => {
              setSelected("setpass");
            }}
            onBlur={() => {
              setSelected("");
            }}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            borderColor={"white"}
          />
          <Text style={styles.label}>Terms and Conditions</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={androidToast}>
        <Text style={{ color: Colors.darkblue }}>Sign-Up</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", paddingTop: 20 }}>
        <Text style={{ fontSize: 14, color: Colors.darkblue }}>
          Already have an Account?
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text
            style={{ fontSize: 15, fontWeight: "bold", color: Colors.darkblue }}
          >
            {""} Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginVertical: 15,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    color: Colors.darkblue,
    fontSize: 15,
  },
});
