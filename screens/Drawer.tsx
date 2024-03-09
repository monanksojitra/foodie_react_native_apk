import * as React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { BottomTabNavigation } from "./BottomTabNavigation";
import EditProfile from "./EditProfile";
import FoodScreen from "./FoodScreen";
import Header from "./Header";
import History from "./History";

const Tab = createBottomTabNavigator();

const drawerList = [
  { id: 1, icon: "user", title: "Profile", route: "profile" },
  { id: 2, icon: "shoppingcart", title: "orders", route: "cart" },
  { id: 3, icon: "tagso", title: "offer and promo", route: "offers" },
  { id: 4, icon: "filetext1", title: "Privacy policy", route: "privacy" },
  { id: 5, icon: "lock", title: "Security", route: "security" },
];
export const TabNav = ({ navigation }) => {
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
        <View className="flex flex-row gap-2 p-10">
          <Text className="text-white text-base font-semibold">Sign-out</Text>
          <AntDesign name="arrowright" size={28} color="white" />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
