import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { cn } from "../util/Cn";

const Header = ({
  title = "",
  icon = "",
  iconclick = () => {},
  onpressback = () => {},
}) => {
  return (
    <View className="flex px-10 py-4 flex-row justify-between items-center ">
      <TouchableOpacity onPress={onpressback}>
        <Ionicons name="arrow-back" size={26} />
      </TouchableOpacity>
      <Text className="text-lg font-semibold">{title}</Text>

      <TouchableOpacity onPress={iconclick}>
        <Ionicons name={icon} size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
