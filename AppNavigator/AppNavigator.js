import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Size, Font, Colors } from "../Constants/Styles";
import Home from "../Screens/Home";
import Login from "../Screens/LoginGuest";
import SignUpGuest from "../Screens/SignUpGuest";
import OnBoarding from "../Screens/OnBoarding";
import Header from "../Constants/Components/Header";
import MyFav from "../Drawer Screen/MyFav";
import Setting from "../Drawer Screen/Setting";
import AboutUs from "../Drawer Screen/AboutUs";
import LoginCounseller from "../Screens/LoginCounseller";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../Screens/DrawerContent";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpGuest"
          component={SignUpGuest}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthNavigator = (props) => {
  const [selected, setSelected] = useState("Login");

  return (
    <>
      <Header />
      <View
        style={{
          flexDirection: "row",

          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            padding: Size.padding,
            justifyContent: "center",
            alignItems: "center",
            borderBottomColor:
              selected === "Login" ? Colors.darkblue : Colors.lightblue,
            borderBottomWidth: selected === "Login" ? 2 : 1,
          }}
          onPress={() => {
            props.navigation.navigate("Login");
            setSelected("Login");
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: selected === "Login" ? "bold" : "100",
              color: selected === "Login" ? Colors.darkblue : Colors.lightblue,
              // borderBottomWidth: selected === "Login" ? 2 :1,
              // borderBottomColor: selected === "Login" ? Colors.darkblue : Colors.lightblue,
            }}
          >
            Guest
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("LoginCounseller");
            setSelected("signup");
          }}
          style={{
            flex: 1,
            padding: Size.padding,
            justifyContent: "center",
            alignItems: "center",
            borderBottomColor:
              selected === "signup" ? Colors.darkblue : Colors.lightblue,
            borderBottomWidth: selected === "signup" ? 2 : 1,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: selected === "signup" ? "bold" : "100",
              color: selected === "signup" ? Colors.darkblue : Colors.lightblue,
              // borderBottomWidth: selected === "signup" ? 2 :1,
              // borderBottomColor: selected === "signup" ? Colors.darkblue : Colors.lightblue
            }}
          >
            Counseller
          </Text>
        </TouchableOpacity>
      </View>

      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginCounseller"
          component={LoginCounseller}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export { AppNavigator, AuthNavigator };

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        {/* <Drawer.Navigator> */}
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="MyFav" component={MyFav} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
