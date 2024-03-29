import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./screens/Profile";
import Cart from "./screens/Cart";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SearchFood from "./screens/SearchFood";
import FoodScreen from "./screens/FoodScreen";
import { FoodProvider, useFoodContext } from "./util/Context";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { BottomTabNavigation } from "./screens/BottomTabNavigation";
import Home from "./screens/Home";
import EditProfile from "./screens/EditProfile";
import History from "./screens/History";
import FevFoodList from "./screens/FevFoodList";
import OfferAndPromo from "./screens/OfferAndPromo";
import DeliveryAddress from "./screens/DeliveryAddress";
import Checkout from "./screens/Checkout";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const drawerList = [
  { id: 1, icon: "user", title: "Profile", route: "editprofile" },
  { id: 2, icon: "shoppingcart", title: "orders", route: "cart" },
  { id: 3, icon: "tagso", title: "offer and promo", route: "offers" },
  { id: 4, icon: "filetext1", title: "Privacy policy", route: "privacy" },
  { id: 5, icon: "lock", title: "Security", route: "security" },
];
const TabNav = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName={"home"}
      tabBar={(props) => <BottomTabNavigation {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="likedfood" component={FevFoodList} />
      <Tab.Screen name="history" component={History} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  const { setLogin } = useFoodContext();
  const logout = () => {
    setLogin(false);
  };
  return (
    <DrawerContentScrollView {...props}>
      <View className="h-screen bg-originPrimary flex justify-between py-10">
        <View className="p-10">
          {drawerList.map((item) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(item.route)}
              key={item.id}
              className="flex flex-row gap-3 items-center"
            >
              <AntDesign name={item.icon as any} size={28} color="white" />
              <Text className="text-white text-base font-semibold border-b py-4 w-[70%] border-white/60">
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => logout}
          className="flex flex-row gap-2 p-10"
        >
          <Text className="text-white text-base font-semibold">Sign-out</Text>
          <AntDesign name="arrowright" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
const Drawer = createDrawerNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const Main = () => {
  return (
    <FoodProvider>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="homeScreen" component={TabNav} />
        <Drawer.Screen name="cart" component={Cart} />
        <Drawer.Screen name="searchFood" component={SearchFood} />
        <Drawer.Screen name="foodscreen" component={FoodScreen} />
        <Drawer.Screen name="fooddata" component={FoodScreen} />
        <Drawer.Screen name="profile" component={Profile} />
        <Drawer.Screen name="editprofile" component={EditProfile} />
        <Drawer.Screen name="offers" component={OfferAndPromo} />
        <Drawer.Screen name="delivery" component={DeliveryAddress} />
        <Drawer.Screen name="checkout" component={Checkout} />
      </Drawer.Navigator>
    </FoodProvider>
  );
};
