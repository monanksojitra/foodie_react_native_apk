import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Box from "../components/Box";
import { SwipeListView } from "react-native-swipe-list-view";
import { foodList } from "../util/Data";
import Button from "../components/Button";

const Cart = ({ navigate }) => {
  return (
    <SafeAreaView>
      <Header title="Cart" onpress={() => navigate.navigation("home")} />
      <View className="flex flex-row gap-2 items-center justify-center mt-12 text-xs">
        <MaterialIcons name="swipe-down" size={24} />
        <Text>swipe on an item to delete</Text>
      </View>
      <View className="px-10 pt-5 h-[81%]">
        <SwipeListView
          showsVerticalScrollIndicator={false}
          data={foodList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={() => (
            <Box className="flex flex-row my-3 rounded-3xl ">
              <View className="h-20 aspect-square">
                <Image
                  source={require("../assets/food1.png")}
                  className="h-full w-full rounded-full"
                />
              </View>
              <View className="pt-1 space-y-2 px-4">
                <Text className="text-base font-semibold">
                  Veggie tomato mix
                </Text>
                <Text className="text-base font-semibold text-originPrimary">
                  #1,900
                </Text>
              </View>
              <View className="flex flex-row space-x-3 bg-originPrimary h-8 rounded-3xl items-center  justify-center w-20 absolute bottom-5 right-5">
                <TouchableOpacity>
                  <Text className="text-white">-</Text>
                </TouchableOpacity>
                <Text className="text-white">1</Text>
                <TouchableOpacity>
                  <Text className="text-white">+</Text>
                </TouchableOpacity>
              </View>
            </Box>
          )}
          renderHiddenItem={() => (
            <View className="flex flex-row justify-end items-center h-full space-x-2">
              <TouchableOpacity className="bg-[#DF2C2C] h-10 aspect-square rounded-full flex items-center justify-center">
                <AntDesign name="hearto" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#DF2C2C] h-10 aspect-square rounded-full flex items-center justify-center">
                <MaterialIcons name="delete-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}
          rightOpenValue={-150}
          previewRowKey={"0"}
          previewOpenValue={-40}
        />
        <View className="flex items-center justify-center">
          <Button onPress={() => {}} title={"Complete order"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
