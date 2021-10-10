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
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import OnBoarding from "../Screens/OnBoarding";
import Header from "../Constants/Components/Header";
import MyFav from "../Drawer Screen/MyFav";
import Setting from "../Drawer Screen/Setting";
import AboutUs from "../Drawer Screen/AboutUs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { DrawerContent } from "../Screens/DrawerContent";
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
        {/* <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          // options={{
          //   headerShown: false,
          // }}
        /> */}
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
            props.navigation.navigate("Login");
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

      <View
        style={{
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selected === "Login" ? (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: Colors.darkblue,
            }}
          >
            Login as guest
          </Text>
        ) : (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: Colors.darkblue,
            }}
          >
            Login as Counsellor
          </Text>
        )}
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
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export { AppNavigator, AuthNavigator };

// const Drawer = createDrawerNavigator();
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
//       <Drawer.Screen name="My Favourites" component={MyFav} />
//       <Drawer.Screen name="Settings" component={Setting} />
//       <Drawer.Screen name="About Us" component={AboutUs} />
//     </Drawer.Navigator>
//   );
// }
// const Drawer = createDrawerNavigator();
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <DrawerContent props={props} />}
//     >
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="MyFav" component={MyFav} />
//       <Drawer.Screen name="Settings" component={Setting} />
//       <Drawer.Screen name="AboutUs" component={AboutUs} />
//     </Drawer.Navigator>
//   );
// }
// export default DrawerNavigator;
