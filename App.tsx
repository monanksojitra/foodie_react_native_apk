import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { SafeAreaView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigation } from "./screens/BottomTabNavigation";
import Splash from "./screens/Splash";
import FoodList from "./screens/FoodList";
import FoodScreen from "./screens/FoodScreen";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
NativeWindStyleSheet.setOutput({
  default: "native",
});
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"home"}
        tabBar={(props) => <BottomTabNavigation {...props} />}
      >
        {/* <Tab.Screen name="home" component={Home} /> */}
        <Tab.Screen name="home" component={FoodScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
