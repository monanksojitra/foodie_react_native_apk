import React from "react";
import Home from "./screens/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import { BottomTabNavigation } from "./screens/BottomTabNavigation";
import FoodScreen from "./screens/FoodScreen";
import Header from "./screens/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EditProfile from "./screens/EditProfile";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"home"}
        tabBar={(props) => <BottomTabNavigation {...props} />}
        tabBarPosition="bottom"
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="foodscreen"
          component={FoodScreen}
          options={{ header: () => <Header icon="heart-outline" /> }}
        />
        <Tab.Screen
          name="profileEdit"
          component={EditProfile}
          options={{
            header: () => <Header title="Edit My profile" />,
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            header: () => <Header title="My profile" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
