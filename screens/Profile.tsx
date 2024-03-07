import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Button from "../components/Button";
import Box from "../components/Box";

const Profile = () => {
  const optionList = [
    { id: 1, label: "Orders", route: "/" },
    { id: 2, label: "Pending reviews", route: "/" },
    { id: 3, label: "Faq", route: "/" },
    { id: 4, label: "Help", route: "/" },
  ];
  return (
    <ScrollView>
      <View className="p-10">
        <View className="px-3">
          <Text className="text-3xl font-semibold">My profile</Text>
        </View>
        <View className="flex flex-row pt-10 pb-3 justify-between items-center">
          <Text className="text-lg  font-semibold">Personal details</Text>
          <TouchableOpacity>
            <Text className="text-sm text-originPrimary  font-normal">
              change
            </Text>
          </TouchableOpacity>
        </View>
        <Box className="rounded-3xl flex flex-row   justify-between">
          <View className="h-16 rounded-2xl aspect-square">
            <Image
              source={require("../assets/2.png")}
              className="h-full aspect-square rounded-2xl"
            />
          </View>

          <View className="flex w-[70%] px-1 space-y-1 ">
            <Text className="text-lg font-semibold">Monank Sojitra</Text>
            <Text className="text-xs opacity-40 font-normal border-b-[1px] p-1">
              monaksojitra4444@gmail.com
            </Text>
            <Text className="text-xs opacity-40 font-normal border-b-[1px] p-1">
              +91 99099 99099
            </Text>
            <Text className="text-xs  opacity-40 font-normal p-1">
              No 15 uti street off ovie palace road effurun delta state
            </Text>
          </View>
        </Box>
        <View className="pt-3">
          {optionList.map((item) => (
            <Box key={item.id} className="mt-5 py-3 rounded-xl flex">
              <TouchableOpacity className="items-center  flex flex-row justify-between ">
                <Text className="text-lg font-semibold text-black">
                  {item.label}
                </Text>
                <AntDesign name="right" size={16} />
              </TouchableOpacity>
            </Box>
          ))}
        </View>
        <View className="flex items-center justify-center py-7">
          <Button onPress={() => {}} title="Update" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
