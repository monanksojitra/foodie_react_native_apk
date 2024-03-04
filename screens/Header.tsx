import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title = "", icon = "" }) => {
  return (
    <View className="flex px-10 pt-16 flex-row justify-between items-center">
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={26} />
      </TouchableOpacity>
      <Text className="text-lg font-semibold">{title}</Text>

      <TouchableOpacity onPress={() => console.log("press")}>
        <Ionicons name={icon} size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
