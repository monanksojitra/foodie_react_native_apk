import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Box from "../components/Box";
import { RadioButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";
import { useFoodContext } from "../util/Context";

const Checkout = ({ navigation }) => {
  const [selectionRadio, setSelectionRadio] = useState(0);
  const [method, setMethod] = useState(0);
  const { calculateTotalCost } = useFoodContext();
  const deliveryType = [
    { id: 1, method: "Door delivery" },
    { id: 2, method: "Pick up" },
  ];
  const paymentList = [
    { id: 1, bgColor: "#F47B0A", icon: "credit-card", title: "Card" },
    { id: 2, bgColor: "#EB4796", icon: "bank", title: "Bank account" },
    { id: 3, bgColor: "#0038FF", icon: "paypal", title: "Paypal" },
  ];

  return (
    <SafeAreaView className="h-full">
      <Header
        title="Checkout"
        onpressback={() => navigation.navigate("delivery")}
      />
      <ScrollView>
        <View className="px-10">
          <View className="py-9">
            <Text className="text-4xl font-bold">Payment</Text>
          </View>
          <View className="pb-5">
            <Text className="text-base pb-5 font-semibold">Payment Method</Text>
            <Box className=" rounded-3xl flex">
              {paymentList.map((item) => (
                <View key={item.id} className="flex flex-row items-center ">
                  <RadioButton
                    value={item.id.toString()}
                    status={
                      selectionRadio === item.id ? "checked" : "unchecked"
                    }
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
                    <Text className="text-base font-normal px-3">
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </Box>
          </View>
          <View className="">
            <Text className="text-base pb-5 font-semibold">
              Delivery method.
            </Text>

            <Box className=" rounded-3xl flex">
              {deliveryType.map((item) => (
                <View key={item.id} className="flex flex-row items-center ">
                  <RadioButton
                    value={item.id.toString()}
                    status={method === item.id ? "checked" : "unchecked"}
                    onPress={() => setMethod(item.id)}
                  />
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setMethod(item.id)}
                    className="flex flex-row items-center justify-start py-4 ml-3 border-b-[1px] border-black/40 w-[80%]"
                  >
                    <Text className="text-base font-normal px-3">
                      {item.method}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </Box>
          </View>
          <View className="flex flex-row justify-between items-center py-7">
            <Text className="text-base font-normal">Total</Text>
            <Text className="text-xl font-semibold">
              {calculateTotalCost()}$
            </Text>
          </View>
        </View>
        <View className="w-full flex items-center justify-center mb-5">
          <Button onPress={() => {}} title="Proceed to payment" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
