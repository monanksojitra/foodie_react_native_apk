import { View, Text } from "react-native";

import { cn } from "../util/Cn";

const Box = ({ className = "", children, ...props }) => {
  return (
    <View className={cn("bg-white p-5 ", className)} {...props}>
      {children}
    </View>
  );
};

export default Box;
