import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Image,ScrollView,} from "react-native";

import {Size,Font,Colors} from '../Constants/Styles'



import Home from "../Screens/Home";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import OnBoarding from "../Screens/OnBoarding";
import Header from "../Constants/Components/Header";

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
          
          height : 50,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <TouchableOpacity style={{ 
        flex: 1 , 
        padding:Size.padding,
        justifyContent:'center', 
        alignItems:'center', 
        borderBottomColor: selected === 'Login' ? Colors.darkblue : Colors.lightblue , 
        borderBottomWidth:selected === 'Login' ? 2: 1 , 
      }}
                          onPress={() => { props.navigation.navigate("Login"); setSelected("Login"); }}>
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
            props.navigation.navigate("SignUp");
            setSelected("signup");
          }}
          style={{
            flex: 1 , 
        padding:Size.padding,
        justifyContent:'center', 
        alignItems:'center', 
        borderBottomColor: selected === 'signup' ? Colors.darkblue : Colors.lightblue , 
        borderBottomWidth:selected === 'signup' ? 2: 1 , 
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
