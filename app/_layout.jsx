import { Stack } from "expo-router";
import { View } from "react-native";
import "../styles/global.css";
import LogoIcon from "../components/Icons/LogoIcon";

export default function Layout() {
  return (
    <View className="flex-1 bg-black/95">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <LogoIcon />,
        }}
      />
    </View>
  );
}
