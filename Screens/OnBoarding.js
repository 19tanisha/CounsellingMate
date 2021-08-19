import React from "react";
import {StyleSheet,Text,View,Image,ImageBackground,StatusBar,TouchableOpacity,} from "react-native";
import Swiper from "react-native-swiper";

const OnBoarding = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper autoplay={true} showsButtons={true} loop={false}>
        <View style={styles.slide}>
          <ImageBackground
            source={require("../assets/1.png")}
            style={{ width: "100%", height: "100%" }}
          >

            <TouchableOpacity
              style={styles.done}
              onPress={() => props.navigation.navigate("AuthNavigator")}
            >
              <View>
                <Text style={{ color:'#8F63AE', fontSize: 20 }}>
                  Skip
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.slide}>
          <ImageBackground
            source={require("../assets/2.png")}
            style={{ width: "100%", height: "100%" }}
          >
        
            <TouchableOpacity
              style={styles.done}
              onPress={() => props.navigation.navigate("AuthNavigator")}
            >
              <View>
                <Text style={{ color: '#93061B', fontSize: 20 }}>
                  Skip
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.slide}>
          <ImageBackground
            source={require("../assets/3.png")}
            style={{ width: "100%", height: "100%" }}
          >
         
            <TouchableOpacity
              style={styles.done}
              onPress={() => props.navigation.navigate("AuthNavigator")}
            >
              <View>
                <Text style={{ color: "#F06060", fontSize: 20 }}>
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </Swiper>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slide: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  done: {
    height: 30,
    width: 70,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 0,
    borderColor: "green",
  },
});

//         <Onboarding
//   pages={[
//     {
//       backgroundColor:'white',
//       image: <Image
//       source = {require('../assets/fruits.png')}
//       style = {{height:600, width:'100%'}}
//       />,

//       title: 'Onboarding',
//       subtitle: 'Done with React Native Onboarding Swiper',
//     },
//     {
//       backgroundColor: 'red',
//       image: <Image source={{
//         uri:"https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs="
//       }}
//       style = {{height:100, width:100}}
//       />,
//       title: 'Onboarding',
//       subtitle: 'Done with React Native Onboarding Swiper',
//     },
//     {
//       backgroundColor: 'green',
//       image: <Image source={{
//         uri:'https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg'
//       }} />,
//       title: 'Onboarding',
//       subtitle: 'Done with React Native Onboarding Swiper',
//     },

//   ]}
// />
