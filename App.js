import React, { useState } from "react";
import { AppNavigator, AuthNavigator } from "./AppNavigator/AppNavigator";
import { Apploading } from "expo";
import { Font } from "expo";
import Login from "./Screens/Login";
import Home from "./Screens/Home";

export default function App() {
  return <AppNavigator />;
}
