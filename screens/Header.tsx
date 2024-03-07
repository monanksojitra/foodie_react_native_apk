import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { cn } from "../util/Cn";

const Header = ({
  title = "",
  icon = "",
  className = "",
  onpress = () => {},
}) => {
  return (
    <View
      className={cn(
        "flex px-10 flex-row pt-8 justify-between items-center",
        className
      )}
    >
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={26} />
      </TouchableOpacity>
      <Text className="text-lg font-semibold">{title}</Text>

      <TouchableOpacity onPress={onpress}>
        <Ionicons name={icon} size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
