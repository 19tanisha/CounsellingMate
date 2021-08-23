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
  SimpleLineIcons,
} from "react-native-vector-icons";
import { signInAsync } from "expo-google-sign-in";
// import DatePicker from "react-native-datepicker";

const SignUp = (props) => {
  // const [date, setDate] = useState("09-10-2020");
  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 50 }}>
        <Text
          style={{ fontWeight: "bold", fontSize: 22, color: Colors.darkblue }}
        >
          Sign-Up as a Guest!
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor: "darkgrey",
          width: "70%",
          paddingTop: 20,
        }}
      >
        <SimpleLineIcons name="pencil" size={18} color="darkgrey" />
        <TextInput
          placeholder="Name"
          placeholderTextColor="darkgrey"
          style={{ paddingLeft: 5, padding: 10, fontSize: 16, width: "70%" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor: "darkgrey",
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
            style={{ paddingLeft: 5, padding: 10, fontSize: 16, width: "70%" }}
          />
          {/* <DatePicker
            style={styles.datePickerStyle}
            date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          /> */}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor: "darkgrey",
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
        />
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor: "darkgrey",
          width: "70%",
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
          style={{ paddingLeft: 5, padding: 10, fontSize: 16,width:'70%' }}
        />
      </View> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor: "darkgrey",
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
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor: "darkgrey",
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
        />
      </View>

      <View style={styles.button}>
        <Text style={{ color: Colors.darkblue }}>Sign-Up</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={14}
          color={Colors.darkblue}
          style={{}}
        />
      </View>

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
});
