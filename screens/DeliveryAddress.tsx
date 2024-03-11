import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import Box from "../components/Box";
import { Dialog, Portal, RadioButton } from "react-native-paper";
import Button from "../components/Button";
import PopupModel from "../components/PopupModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormContext } from "react-hook-form";
import { useFoodContext } from "../util/Context";

const DeliveryAddress = ({ navigation }) => {
  const [method, setMethod] = useState(0);
  const deliveryType = [
    { id: 1, method: "Door delivery" },
    { id: 2, method: "Pick up" },
  ];
  const [visible, setVisible] = React.useState(true);
  const { calculateTotalCost } = useFoodContext();

  return (
    <SafeAreaView>
      <Header
        title="Chechout"
        onpressback={() => navigation.navigate("homeScreen")}
      />
      <View className="px-10">
        <View className="py-9">
          <Text className="text-4xl font-bold">Delivery</Text>
        </View>
        <View className="pb-5">
          <View className="flex pb-5 flex-row items-center justify-between">
            <Text className="text-base  font-semibold">Address details</Text>
            <TouchableOpacity>
              <Text className="text-base font-normal text-originPrimary">
                change
              </Text>
            </TouchableOpacity>
          </View>
          <Box className=" rounded-3xl px-10">
            <View className="border-b-[1px] border-black/40 w-[95%] py-2">
              <Text>Marvis Kparobo</Text>
            </View>
            <View className="border-b-[1px] border-black/40 w-[95%] py-2">
              <Text>
                Km 5 refinery road oppsite re public road, effurun, delta state
              </Text>
            </View>
            <View className=" w-[95%] py-2">
              <Text>+234 9011039271</Text>
            </View>
          </Box>
        </View>
        <View className="">
          <Text className="text-base pb-5 font-semibold">Delivery method.</Text>

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
        <View className="flex flex-row justify-between items-center py-10">
          <Text className="text-base font-normal">Total</Text>
          <Text className="text-xl font-semibold">{calculateTotalCost()}$</Text>
        </View>
      </View>
      <View className="w-full flex items-center justify-center">
        <Button
          onPress={() => navigation.navigate("checkout")}
          title="Proceed to payment"
        />
      </View>
    </SafeAreaView>
  );
};

export default DeliveryAddress;
