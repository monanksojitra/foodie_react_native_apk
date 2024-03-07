import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FoodList from "./FoodList";
import Box from "../components/Box";
const Home = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const foodItems = [
    "Foods",
    "Drinks",
    "Snacks",
    "Sauce",
    "Foods",
    "Drinks",
    "Snacks",
    "Sauce",
  ];

  return (
    <View className="h-full flex">
      <View className="px-10 py-5">
        <View className="flex flex-row justify-between items-center pt-10">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={32} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("cart")}>
            <Ionicons name="cart-outline" size={32} />
          </TouchableOpacity>
        </View>
        <View className="w-[70%] py-10">
          <Text className="text-4xl font-bold">Delicious food for you</Text>
        </View>
        <Box className="flex flex-row gap-x-3 items-center h-12 p-0 bg-white/70 rounded-full">
          <Ionicons name="search" size={24} />
          <TextInput placeholder="Search" className="text-base w-full" />
        </Box>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={foodItems}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => setSelectedIndex(item.index)}
              className="py-3"
            >
              <Text
                className={`${
                  selectedIndex === item.index
                    ? "text-originPrimary"
                    : "text-black/50"
                } px-5 py-3`}
              >
                {item.item}
              </Text>
              <View
                className={
                  selectedIndex === item.index
                    ? "h-1 w-full bg-originPrimary"
                    : " "
                }
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <FoodList />
    </View>
  );
};

export default Home;
