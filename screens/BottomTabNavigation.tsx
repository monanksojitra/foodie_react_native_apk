import { Ionicons } from "@expo/vector-icons";
import { View, Pressable, Dimensions, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const BottomTabNavigation = ({
  state,
  descriptors,
  navigation,
}: any) => {
  const bottomNavigationItems = ["home", "heart", "person", "time"];
  return (
    <SafeAreaView className="px-10 py-5 flex flex-row justify-between bg-white-100">
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
            <View>
              <Ionicons
                size={30}
                color={isFocused ? "#FA4A0C" : "#ADADAF"}
                name={
                  isFocused
                    ? bottomNavigationItems[index]
                    : `${bottomNavigationItems[index]}-outline`
                }
              />
            </View>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};
