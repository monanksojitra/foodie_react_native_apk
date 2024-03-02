import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const Home = () => {
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
    <View className="h-full p-10">
      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity>
          <Ionicons name="menu" size={32} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={32} />
        </TouchableOpacity>
      </View>
      <View className="w-[70%] py-10">
        <Text className="text-4xl font-bold">Delicious food for you</Text>
      </View>
      <View className="flex flex-row gap-x-3 items-center h-12 bg-white/70 rounded-full">
        <Ionicons name="search" size={24} />
        <TextInput placeholder="Search" className="text-base w-full" />
      </View>

      <View>
        <ScrollView horizontal className="flex gap-x-10">
          {foodItems.map((item, i) => (
            <TouchableOpacity
              onPress={() => setSelectedIndex(i)}
              className="py-3"
              key={i}
            >
              <Text
                className={`${
                  selectedIndex === i ? "text-originPrimary" : "text-black/50"
                } px-5 py-3`}
              >
                {item}
              </Text>
              <View
                className={
                  selectedIndex === i ? "h-1 w-full bg-originPrimary" : " "
                }
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
