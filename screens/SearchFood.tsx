import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import FoodList from "./FoodList";
import { foodList } from "../util/Data";
import Box from "../components/Box";

const SearchFood = ({ navigation }) => {
  return (
    <View className="h-full flex justify-between">
      <View className="flex px-10 pt-16 flex-row items-center gap-8">
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Ionicons name="arrow-back" size={26} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          className="text-base font-semibold w-full"
        />
      </View>
      <View className="h-[80%] flex items-center rounded-tr-3xl rounded-tl-3xl bg-white">
        <Text className="text-2xl font-bold p-5">
          Found {foodList.length} results
        </Text>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          data={foodList}
          showsVerticalScrollIndicator={false}
          renderItem={(items) => (
            <View
              key={items.item.id}
              className="flex  items-center px-2 mt-5 overflow-visible justify-end h-64"
            >
              <View className="rounded-full absolute top-0 z-10">
                <Image
                  source={items.item.img}
                  className="rounded-full h-32 aspect-square"
                />
              </View>
              <Box className=" rounded-2xl shadow-xl shadow-black/60 flex flex-col justify-end items-center h-[80%] px-2 gap-y-3">
                <Text className=" text-center w-40  text-xl font-bold">
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

export default SearchFood;
