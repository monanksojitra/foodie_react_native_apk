import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-originPrimary flex items-center justify-center w-[80%] h-14 rounded-full"
      onPress={onPress}
    >
      <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
