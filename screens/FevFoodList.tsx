import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFoodContext } from "../util/Context";
import Box from "../components/Box";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";

const FevFoodList = ({ navigation }) => {
  const { likeFood, removeLikeFood } = useFoodContext();

  return (
    <SafeAreaView className="px-10">
      <View className="flex flex-row gap-2 items-center justify-center mt-8 text-xs">
        <MaterialIcons name="swipe-down" size={24} />
        <Text>swipe on an item to delete</Text>
      </View>
      {likeFood.length > 0 ? (
        <FlatList
          data={likeFood}
          renderItem={(item) => (
            <Box className="flex flex-row mt-3 rounded-3xl ">
              <View className="h-20 aspect-square">
                <Image
                  source={item.item.img}
                  className="h-full w-full rounded-full"
                />
              </View>
              <View className="pt-1 space-y-1 pl-3 w-[60%]">
                <Text className="text-base font-semibold">
                  {item.item.Name}
                </Text>
                <Text className="text-xs font-semibold text-black/50">
                  {item.item.description}
                </Text>
                <Text className="text-base font-semibold text-originPrimary">
                  {item.item.price}$
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => removeLikeFood(item.item.id)}
                className="h-10 aspect-square rounded-full flex items-center justify-center"
              >
                <AntDesign name="heart" size={24} color="#FA4A0C" />
              </TouchableOpacity>
            </Box>
          )}
          keyExtractor={(id) => id.id}
        />
      ) : (
        <>
          <View className="flex items-center justify-center h-[80%]">
            <View className="flex items-center justify-center gap-3 w-[90%]">
              <Feather name="list" size={130} color="gray" />
              <Text className="text-2xl font-semibold">
                Favorite Food is Empty
              </Text>
              <Text className="font-normal text-base text-center text-black/50">
                Hit the orange button down below to add food item
              </Text>
            </View>
          </View>
          <View className="flex items-center justify-center">
            <Button
              title={"start ordering"}
              onPress={() => navigation.navigate("home")}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default FevFoodList;
