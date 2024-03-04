import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";

const FoodScreen = () => {
  return (
    <SafeAreaView className="flex ">
      <View className="flex items-center justify-center">
        <View>
          <Image
            className="rounded-full"
            source={require("../assets/food1.png")}
          />
        </View>
        <View className="flex py-6 flex-row gap-x-1.5">
          <View className="h-2 aspect-square bg-originPrimary rounded-full"></View>
          <View className="h-2 aspect-square bg-gray-300 rounded-full"></View>
          <View className="h-2 aspect-square bg-gray-300 rounded-full"></View>
          <View className="h-2 aspect-square bg-gray-300 rounded-full"></View>
        </View>
        <View className="flex gap-y-2 items-center justify-center">
          <Text className="text-2xl font-semibold">Veggie tomato mix</Text>
          <Text className="text-xl font-semibold text-originPrimary">
            N1,900
          </Text>
        </View>
      </View>
      <View className="p-10 space-y-5">
        <View className="pr-3">
          <Text className="text-base font-semibold ">Delivery info</Text>
          <Text className="text-sm font-normal opacity-30">
            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
          </Text>
        </View>
        <View className="pr-3">
          <Text className="text-base font-semibold ">Return policy</Text>
          <Text className="text-sm font-normal opacity-30">
            All our foods are double checked before leaving our stores so by any
            case you found a broken food please contact our hotline immediately.
          </Text>
        </View>
      </View>
      <View className="flex items-center justify-center">
        <Button onPress={() => {}} title="Add to cart" />
      </View>
    </SafeAreaView>
  );
};

export default FoodScreen;
