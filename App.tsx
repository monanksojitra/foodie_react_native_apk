import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./screens/Profile";
import Cart from "./screens/Cart";
import Chechout from "./screens/Chechout";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent, TabNav } from "./screens/Drawer";
import SearchFood from "./screens/SearchFood";
import FoodScreen from "./screens/FoodScreen";
import { FoodProvider } from "./util/Context";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});
const App = () => {
  return (
    <NavigationContainer>
      <FoodProvider>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name="homeScreen" component={TabNav} />
          <Drawer.Screen name="cart" component={Cart} />
          <Drawer.Screen name="searchFood" component={SearchFood} />
          <Drawer.Screen name="fooddata" component={FoodScreen} />
          <Drawer.Screen name="profile" component={Profile} />
        </Drawer.Navigator>
      </FoodProvider>
    </NavigationContainer>
  );
};

export default App;
