import React, { useState } from "react";
import { AppNavigator, AuthNavigator } from "./AppNavigator/AppNavigator";
import { Apploading } from "expo";
import { Font } from "expo";
import Login from "./Screens/Login";
import Home from "./Screens/Home";


// const getFonts = () => Font.loadAsync({
//       'CinzelDecorative-Bold': require("./assets/CinzelDecorative-Bold.ttf")
// });





export default function App() 
//{
//   const [fontsLoaded, setFontsLoaded] = useState(false)

//   if (fontsLoaded){
//     return(
//       <AppNavigator/>
//     )
//   }else{
//     return(
//       <Apploading
//       startAsync = {getFonts}
//       onFinish = {() => setFontsLoaded(true)}/>
//     )
//   }
// }
{
  return(
    <AppNavigator/>
  )
}