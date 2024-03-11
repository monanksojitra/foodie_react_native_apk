import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
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
import Header from "./screens/Header";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { BottomTabNavigation } from "./screens/BottomTabNavigation";
import Home from "./screens/Home";
import EditProfile from "./screens/EditProfile";
import History from "./screens/History";
import FevFoodList from "./screens/FevFoodList";
import { SafeAreaView } from "react-native-safe-area-context";
import OfferAndPromo from "./screens/OfferAndPromo";
import DeliveryAddress from "./screens/DeliveryAddress";
import Checkout from "./screens/Checkout";

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
  const { setIsLogin } = useFoodContext();
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
              <AntDesign name={item.icon} size={28} color="white" />
              <Text className="text-white text-base font-semibold border-b py-4 w-[70%] border-white/60">
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => setIsLogin(false)}
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
  const [splashIsActive, setSplashIsActive] = useState(true);
  const { isLogin } = useFoodContext();

  useEffect(() => {
    setTimeout(() => {
      setSplashIsActive(false);
    }, 2000);
  }, [isLogin]);
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
        </NavigationContainer>
      ) : (
        <Login />
      )}
    </>
  );
};
export default App;
