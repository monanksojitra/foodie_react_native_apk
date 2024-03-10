import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../components/Box";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { history } from "../util/Data";
import Button from "../components/Button";

const History = ({ navigation }) => {
  return (
    <SafeAreaView>
      {history.length > 0 ? (
        <View className="px-10">
          <FlatList
            data={history}
            showsVerticalScrollIndicator={false}
            keyExtractor={(id) => id.id}
            renderItem={(item) => (
              <Box className="flex flex-row justify-between mt-3 rounded-2xl">
                <View className="bg-red-400 h-16 flex items-center justify-center aspect-square rounded-xl">
                  <MaterialIcons name="percent" size={32} color="white" />
                </View>
                <View className="pl-3 w-[60%] space-y-1">
                  <Text className="text-xl font-semibold">
                    {item.item.name}
                  </Text>
                  <Text className="font-normal text-xs text-black/50">
                    {item.item.description}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text className="text-originPrimary">Apply</Text>
                </TouchableOpacity>
              </Box>
            )}
          />
        </View>
      ) : (
        <View className="flex items-center justify-center h-full">
          <View className="flex items-center justify-center gap-3 w-[60%]">
            <Feather name="calendar" size={130} color="gray" />
            <Text className="text-2xl font-semibold">Order list is Empty</Text>
            <Text className="font-normal text-base text-center text-black/50">
              Hit the orange button down below to add food item{" "}
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default History;
