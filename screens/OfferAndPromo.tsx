import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../components/Box";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "./Header";
import { offerAndPromoCode } from "../util/Data";

const OfferAndPromo = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header
        title="Liked Food"
        onpressback={() => navigation.navigate("homeScreen")}
      />
      <View className="px-10">
        <FlatList
          data={offerAndPromoCode}
          showsVerticalScrollIndicator={false}
          keyExtractor={(id) => id.id}
          renderItem={(item) => (
            <Box className="flex flex-row justify-between mt-3 rounded-2xl">
              <View className="bg-red-400 h-16 flex items-center justify-center aspect-square rounded-xl">
                <MaterialIcons name="percent" size={32} color="white" />
              </View>
              <View className="pl-3 w-[60%] space-y-1">
                <Text className="text-xl font-semibold">{item.item.name}</Text>
                <Text className="font-normal text-xs text-black/50">
                  {item.item.description}
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-originPrimary">Apply</Text>
              </TouchableOpacity>
            </Box>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default OfferAndPromo;
