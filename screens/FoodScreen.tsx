import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Header from "./Header";
import { Food, useFoodContext } from "../util/Context";

const FoodScreen = ({ navigation, route }) => {
  const { addToCart, addLikeFood, removeLikeFood } = useFoodContext();
  const [foodData, setFoodData] = useState<Food>(route.params.data.item);
  const [like, setLike] = useState(false);
  useEffect(() => {
    setFoodData(route.params.data.item);
  }, [route.params.data.item]);
  const handelLikeFood = () => {
    if (!like) {
      addLikeFood(foodData), setLike(true);
    } else {
      removeLikeFood(foodData.id), setLike(false);
    }
  };

  return (
    <SafeAreaView className="">
      <Header
        iconclick={handelLikeFood}
        icon={like ? "heart" : "heart-outline"}
        onpressback={() => navigation.navigate("homeScreen")}
      />
      <View className="flex py-5 items-center justify-center">
        <View>
          <Image
            className="rounded-full h-40 aspect-square"
            source={foodData.img}
          />
        </View>
        <View className="flex py-6 flex-row gap-x-1.5">
          <View className="h-2 aspect-square bg-originPrimary rounded-full"></View>
          <View className="h-2 aspect-square bg-gray-300 rounded-full"></View>
          <View className="h-2 aspect-square bg-gray-300 rounded-full"></View>
          <View className="h-2 aspect-square bg-gray-300 rounded-full"></View>
        </View>
        <View className="flex gap-y-2 items-center justify-center px-10">
          <Text className="text-2xl font-semibold">{foodData.Name}</Text>
          <Text className="text-xl font-semibold text-black/50 text-center">
            {foodData.description}
          </Text>
          <Text className="text-xl font-semibold text-originPrimary text-center">
            {foodData.price} $
          </Text>
        </View>
      </View>
      <View className="p-10 space-y-4">
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
        <Button
          onPress={() => {
            addToCart(foodData);
          }}
          title="Add to cart"
        />
      </View>
    </SafeAreaView>
  );
};

export default FoodScreen;
