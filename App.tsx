import {
  Image,
  SafeAreaView,
  SafeAreaViewBase,
  SafeAreaViewComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Home from "./screens/Home";

const App = () => {
  return (
    <SafeAreaView>
      {/* <Splash /> */}
      {/* <Login /> */}
      <Home />
    </SafeAreaView>
  );
};

export default App;
