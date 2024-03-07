import * as React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { BottomTabNavigation } from "./BottomTabNavigation";
import EditProfile from "./EditProfile";
import FoodScreen from "./FoodScreen";
import Profile from "./Profile";
import Header from "./Header";
import History from "./History";

const Tab = createBottomTabNavigator();

const drawerList = [
  { id: 1, icon: "user", title: "Profile" },
  { id: 2, icon: "shoppingcart", title: "orders" },
  { id: 3, icon: "tagso", title: "offer and promo" },
  { id: 4, icon: "filetext1", title: "Privacy policy" },
  { id: 5, icon: "lock", title: "Security" },
];
export const TabNav = () => {
  return (
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
        options={{
          header: () => <Header icon="heart-outline" />,
        }}
      />
      <Tab.Screen
        name="profileEdit"
        component={EditProfile}
        options={{
          header: () => <Header title="Edit My profile" />,
        }}
      />
      <Tab.Screen
        name="history"
        component={History}
        options={{
          header: () => <Header title="History" />,
        }}
      />
    </Tab.Navigator>
  );
};

export const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="h-screen bg-originPrimary flex justify-between py-10">
        <View className="p-10">
          {drawerList.map((item) => (
            <View key={item.id} className="flex flex-row gap-3 items-center">
              <AntDesign name={item.icon} size={28} color="white" />
              <Text className="text-white text-base font-semibold border-b py-4 w-[70%] border-white/60">
                {item.title}
              </Text>
            </View>
          ))}
        </View>
        <View className="flex flex-row gap-2 p-10">
          <Text className="text-white text-base font-semibold">Sign-out</Text>
          <AntDesign name="arrowright" size={28} color="white" />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
