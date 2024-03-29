import { Ionicons } from "@expo/vector-icons";
import { View, Pressable } from "react-native";
import Box from "../components/Box";

export const BottomTabNavigation = ({ state, navigation }: any) => {
  const bottomNavigationItems = ["home", "heart", "time", "person"];
  return (
    <Box className=" flex flex-row items-center justify-between bg-white-100">
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable onPress={onPress} key={index}>
            <View className="px-5 py-3">
              <Ionicons
                size={30}
                color={isFocused ? "#FA4A0C" : "#ADADAF"}
                name={
                  isFocused
                    ? bottomNavigationItems[index]
                    : (`${bottomNavigationItems[index]}-outline` as any)
                }
              />
            </View>
          </Pressable>
        );
      })}
    </Box>
  );
};
