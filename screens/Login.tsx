import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View className="flex flex-col justify-between bg-white-100 h-full">
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
      <View className="flex-1 justify-between">
        <View className="flex p-10 flex-col gap-y-5">
          <View>
            <Text className="opacity-50">Email address</Text>
            <Controller
              control={control}
              name="email"
              rules={{
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email is not valid",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className="border-b-[1px] p-1"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
            />
            {errors.email && (
              <Text className="text-red-500 py-2">Email is not Valid</Text>
            )}
          </View>
          <View>
            <Text className="opacity-50">Password</Text>
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: "Password is not valid",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  secureTextEntry
                  className="border-b-[1px] p-1"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
            />
            {errors.password && (
              <Text className="text-red-500 py-2">Password is Not Valid</Text>
            )}
          </View>
          <Text className="text-originPrimary ">Forgot password?</Text>
        </View>
        <View className="flex items-center justify-center p-10">
          <TouchableOpacity
            className=" bg-originPrimary/90  h-16 w-full flex items-center justify-center rounded-full"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-base font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
