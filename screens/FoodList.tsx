import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Box from "../components/Box";

const FoodList = () => {
  const FoodList = [
    {
      id: 2,
      img: require("../assets/food1.png"),
      foodName: "Spicy fish sauce",
      info: "N2,300.99",
    },
    {
      id: 3,
      img: require("../assets/food1.png"),
      foodName: "Spicy fish sauce",
      info: "N2,300.99",
    },
    {
      id: 4,
      img: require("../assets/food1.png"),
      foodName: "Spicy fish sauce",
      info: "N2,300.99",
    },
    {
      id: 5,
      img: require("../assets/food1.png"),
      foodName: "Spicy fish sauce",
      info: "N2,300.99",
    },
    {
      id: 6,
      img: require("../assets/food1.png"),
      foodName: "Spicy fish sauce",
      info: "N2,300.99",
    },
  ];
  return (
    <View className=" ">
      <View className="flex flex-row justify-end px-10">
        <TouchableOpacity>
          <Text className="text-originPrimary">see more</Text>
        </TouchableOpacity>
      </View>
      <View className="py-3">
        <FlatList
          horizontal
          data={FoodList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(i) => i.id.toString()}
          renderItem={(items) => (
            <View className="flex items-center mx-4 overflow-visible justify-end relative h-72">
              <View className="rounded-full absolute top-0 z-10">
                <Image source={items.item.img} className="rounded-full" />
              </View>
              <Box className=" rounded-2xl  flex flex-col justify-end items-center h-[80%] px-6 gap-y-3">
                <Text className=" text-center text-xl font-bold">
                  {items.item.foodName}
                </Text>
                <Text className="text-originPrimary font-bold">
                  {items.item.info}
                </Text>
              </Box>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default FoodList;
