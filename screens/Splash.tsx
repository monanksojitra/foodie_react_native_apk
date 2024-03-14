import { Image, Text, View } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View className="flex items-center h-screen w-screen justify-center relative">
      <View className="h-full">
        <Image source={require("../assets/splashimg.jpg")} />
      </View>

      <View className="absolute flex items-center justify-center h-60 aspect-square rounded-full bg-white">
        <Image source={require("../assets/mainlogo.png")} />
        <Text className="text-xs text-originPrimary font-semibold">
          Food for Everyone
        </Text>
      </View>
    </View>
  );
};

export default Splash;
