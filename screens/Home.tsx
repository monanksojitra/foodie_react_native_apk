import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FoodList from "./FoodList";
import Box from "../components/Box";
import { ScrollView } from "react-native-gesture-handler";
import { foodList, sauceList, snackList, softDrinkList } from "../util/Data";
const Home = ({ navigation }) => {
  const foodItems = [
    { id: 0, name: "Foods", data: foodList },
    { id: 1, name: "Drinks", data: softDrinkList },
    { id: 2, name: "Snacks", data: snackList },
    { id: 3, name: "Sauce", data: sauceList },
  ];
  const [selectedItems, setSelectedItems] = useState(foodItems[0]);
  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <ScrollView className="h-full flex">
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
          <TextInput
            placeholder="Search"
            className="text-base w-full"
            onFocus={() => navigation.navigate("searchFood")}
          />
        </Box>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={foodItems}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => setSelectedItems(foodItems[item.index])}
              className="py-3"
            >
              <Text
                className={`${
                  selectedItems.id === item.index
                    ? "text-originPrimary"
                    : "text-black/50"
                } px-5 py-3`}
              >
                {item.item.name}
              </Text>
              <View
                className={
                  selectedItems.id === item.index
                    ? "h-1 w-full bg-originPrimary"
                    : " "
                }
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <FoodList navigation={navigation} items={selectedItems} />
    </ScrollView>
  );
};

export default Home;
