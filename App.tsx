import React, { useEffect, useState } from "react";

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
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Header from "./screens/Header";

const Drawer = createDrawerNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});
const App = () => {
  const [splashIsActive, setSplashIsActive] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSplashIsActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {splashIsActive ? (
        <Splash />
      ) : isLogin ? (
        <NavigationContainer>
          <FoodProvider>
            <Drawer.Navigator
              drawerContent={(props) => <CustomDrawerContent {...props} />}
              screenOptions={{ headerShown: false }}
            >
              <Drawer.Screen name="homeScreen" component={TabNav} />
              <Drawer.Screen name="cart" component={Cart} />
              <Drawer.Screen
                name="searchFood"
                component={SearchFood}
                options={{
                  header: () => (
                    <Header
                      icon="heart-outline"
                      onpressback={() => navigation.navigate("home")}
                    />
                  ),
                }}
              />
              <Drawer.Screen name="fooddata" component={FoodScreen} />
              <Drawer.Screen name="profile" component={Profile} />
            </Drawer.Navigator>
          </FoodProvider>
        </NavigationContainer>
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default App;
