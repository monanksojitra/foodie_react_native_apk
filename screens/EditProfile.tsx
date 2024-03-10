import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import Button from "../components/Button";
import Box from "../components/Box";
import Header from "./Header";

const EditProfile = ({ navigation }) => {
  const [selectionRadio, setSelectionRadio] = useState(0);
  const paymentList = [
    { id: 1, bgColor: "#F47B0A", icon: "credit-card", title: "Card" },
    { id: 2, bgColor: "#EB4796", icon: "bank", title: "Bank account" },
    { id: 3, bgColor: "#0038FF", icon: "paypal", title: "Paypal" },
  ];
  return (
    <SafeAreaView className="">
      <Header
        title="Profile"
        onpressback={() => navigation.navigate("homeScreen")}
      />
      <View className="px-10 flex gap-y-3">
        <Text className="text-base py-2 font-semibold">Information</Text>
        <Box className="rounded-3xl flex flex-row   justify-between">
          <View className="h-16 rounded-2xl aspect-square">
            <Image
              source={require("../assets/2.png")}
              className="h-full aspect-square rounded-2xl"
            />
          </View>

          <View className="flex w-[70%] px-3 ">
            <Text className="text-lg font-semibold">Monank Sojitra</Text>
            <Text className="text-xs opacity-40 font-normal">
              monaksojitra4444@gmail.com
            </Text>
            <Text className="text-xs  opacity-40 font-normal">
              No 15 uti street off ovie palace road effurun delta state
            </Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="create-outline" size={28} />
          </TouchableOpacity>
        </Box>
      </View>
      <View className="px-10 mt-4">
        <Text className="text-base pb-5 font-semibold">Payment Method</Text>
        <Box className=" rounded-3xl flex">
          {paymentList.map((item) => (
            <View key={item.id} className="flex flex-row items-center ">
              <RadioButton
                value={item.id.toString()}
                status={selectionRadio === item.id ? "checked" : "unchecked"}
                onPress={() => setSelectionRadio(item.id)}
              />
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setSelectionRadio(item.id)}
                className="flex flex-row items-center justify-start py-4 ml-3 border-b-[1px] border-black/40 w-[80%]"
              >
                <View
                  className="h-14 flex items-center justify-center rounded-2xl aspect-square"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <FontAwesome name={item.icon} size={24} color="white" />
                </View>
                <Text className="text-base font-normal px-3">{item.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </Box>
      </View>
      <View className="flex items-center justify-center mt-5">
        <Button onPress={() => {}} title="Updatet" />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
