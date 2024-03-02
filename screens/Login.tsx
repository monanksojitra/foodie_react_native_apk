import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View className="flex  justify-start flex-col bg-white-100 h-full">
      <View className=" bg-white drop-shadow-xl flex  flex-col justify-between items-center w-screen rounded-br-3xl rounded-bl-3xl">
        <View className="p-16">
          <Image
            source={require("../assets/logo2.png")}
            className="scale-125"
          />
        </View>
        <View className="flex flex-row gap-x-5 text-lg font-semibold items-center justify-between">
          <Text className="text-lg font-semibold border-b-2 border-originPrimary px-5 py-2">
            Login
          </Text>
          <Text className="text-lg font-semibold border-b-2 border-originPrimary px-5 py-2">
            Sign-up
          </Text>
        </View>
      </View>
      <View className="flex flex-col  justify-between h-1/2">
        <View className="flex p-10 flex-col gap-y-5">
          <View>
            <Text className="opacity-50">Email address</Text>
            <TextInput className="border-b-[1px] p-1" />
          </View>
          <View>
            <Text className="opacity-50">Password</Text>
            <TextInput className="border-b-[1px] p-1" />
          </View>
          <Text className="text-originPrimary ">Forgot passcode?</Text>
        </View>
        <View className="flex items-center justify-center px-10">
          <View className=" bg-originPrimary/90  h-16 w-full flex items-center justify-center rounded-full">
            <Text className="text-white">Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
