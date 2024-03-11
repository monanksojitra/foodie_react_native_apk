import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import Box from "../components/Box";
import { SwipeListView } from "react-native-swipe-list-view";
import Button from "../components/Button";
import { useFoodContext } from "../util/Context";

const Cart = ({ navigation }) => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    addLikeFood,
    removeFromCart,
  } = useFoodContext();

  return (
    <SafeAreaView>
      <Header
        title="Cart"
        onpressback={() => navigation.navigate("homeScreen")}
      />
      {cart.length ? (
        <>
          <View className="flex flex-row gap-2 items-center justify-center mt-8 text-xs">
            <MaterialIcons name="swipe-down" size={24} />
            <Text>swipe on an item to delete</Text>
          </View>

          <View className="px-10 pt-2 h-[82%]">
            <SwipeListView
              showsVerticalScrollIndicator={false}
              data={cart}
              keyExtractor={(item) => item.food.id}
              renderItem={({ item }) => (
                <Box className="flex flex-row my-3 rounded-3xl ">
                  <View className="h-20 aspect-square">
                    <Image
                      source={item.food.img}
                      className="h-full w-full rounded-full"
                    />
                  </View>
                  <View className="pt-1 space-y-1 px-4 w-[70%]">
                    <Text className="text-base font-semibold">
                      {item.food.Name}
                    </Text>
                    <Text className="text-xs font-semibold text-black/50">
                      {item.food.description}
                    </Text>
                    <Text className="text-base font-semibold text-originPrimary">
                      {item.food.price}$
                    </Text>
                  </View>
                  <View className="flex flex-row bg-originPrimary  rounded-3xl items-center  justify-center w-20 absolute bottom-3 gap-x-1 right-4">
                    <TouchableOpacity
                      onPress={() => decreaseQuantity(item.food.id)}
                    >
                      <Text className="text-white p-2">-</Text>
                    </TouchableOpacity>
                    <Text className="text-white">{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => increaseQuantity(item.food.id)}
                    >
                      <Text className="text-white p-2">+</Text>
                    </TouchableOpacity>
                  </View>
                </Box>
              )}
              renderHiddenItem={(item) => (
                <View className="flex flex-row justify-end items-center h-full space-x-2">
                  <TouchableOpacity
                    onPress={() => addLikeFood(item.item.food)}
                    className="bg-[#DF2C2C] h-10 aspect-square rounded-full flex items-center justify-center"
                  >
                    <AntDesign name="hearto" size={20} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => removeFromCart(item.item.food.id)}
                    className="bg-[#DF2C2C] h-10 aspect-square rounded-full flex items-center justify-center"
                  >
                    <MaterialIcons
                      name="delete-outline"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              )}
              rightOpenValue={-150}
              previewRowKey={"0"}
              previewOpenValue={-40}
            />

            <View className="flex items-center justify-center">
              <Button
                onPress={() => navigation.navigate("delivery")}
                title="Proceed to payment"
              />
            </View>
          </View>
        </>
      ) : (
        <>
          <View className="flex items-center justify-center h-[80%]">
            <View className="flex items-center justify-center gap-3 w-[60%]">
              <Feather name="shopping-cart" size={130} color="gray" />
              <Text className="text-2xl font-semibold">Cart is Empty</Text>
              <Text className="font-normal text-base text-center text-black/50">
                Hit the orange button down below to add food item{" "}
              </Text>
            </View>
          </View>
          <View className="flex items-center justify-center">
            <Button
              title={"start ordering"}
              onPress={() => navigation.navigate("homeScreen")}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Cart;
