import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

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
    <View className="flex ">
      <View className="flex flex-row justify-end px-10">
        <TouchableOpacity>
          <Text className="text-originPrimary">see more</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal className="flex py-16 flex-row  gap-x-4">
        {FoodList.map((items) => (
          <View key={items.id} className="flex  items-center justify-end  h-60">
            <View className="rounded-full absolute -top-12 z-10">
              <Image source={items.img} className="rounded-full" />
            </View>
            <View className="bg-white rounded-2xl  flex flex-col justify-end gap-y-3 items-center h-full  px-5 pb-6 ">
              <Text className="w-[70%] text-center text-xl font-bold leading-6">
                {items.foodName}
              </Text>
              <Text className="text-originPrimary font-bold">{items.info}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodList;
