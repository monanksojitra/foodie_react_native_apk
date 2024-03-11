import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Box from "../components/Box";
import { useFoodContext } from "../util/Context";

const SearchFood = ({ navigation }) => {
  const { searchFood } = useFoodContext();
  const [searchInput, setSearchInput] = useState<string>("");
  const handleSearchInputChange = (text: string) => {
    setSearchInput(text);
  };
  const textInputRef = useRef(null);
  useEffect(() => {
    if (textInputRef.current) {
      const unsubscribe = navigation.addListener("focus", () => {
        textInputRef.current?.focus();
      });
      return unsubscribe;
    }
  }, [navigation, textInputRef.current]);

  return (
    <View className="h-full flex justify-between">
      <View className="flex px-10 pt-16 flex-row items-center gap-8">
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Ionicons name="arrow-back" size={26} />
        </TouchableOpacity>
        <TextInput
          ref={textInputRef}
          placeholder="Search"
          value={searchInput}
          onChangeText={handleSearchInputChange}
          className="text-base font-semibold w-full"
        />
      </View>
      <View className="h-[80%] flex items-center rounded-tr-3xl rounded-tl-3xl bg-white">
        <Text className="text-2xl font-bold p-5">
          Found {searchFood(searchInput).length} results
        </Text>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          data={searchFood(searchInput)}
          showsVerticalScrollIndicator={false}
          renderItem={(items) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("foodscreen", { data: items })}
              key={items.item.id}
              className="flex  items-center px-2 mt-5 overflow-visible justify-end h-[270px]"
            >
              <View className="rounded-full absolute top-0 z-10">
                <Image
                  source={items.item.img}
                  className="rounded-full h-32 aspect-square"
                />
              </View>
              <Box className=" rounded-2xl shadow-xl shadow-black/60 flex flex-col justify-end items-center h-[80%] px-2 w-[45vw] gap-y-1">
                <Text className=" text-center  text-xl font-bold">
                  {items.item.Name}
                </Text>
                <Text className="text-black/50 text-center font-bold">
                  {items.item.description}
                </Text>
                <Text className="text-originPrimary text-center font-bold">
                  {items.item.price} $
                </Text>
              </Box>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SearchFood;
