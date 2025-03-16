import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import "../styles/global.css";
import LogoIcon from "../components/Icons/LogoIcon";
import { CircleInfoIcon } from "../components/Icons/Icons";

export default function Layout() {
  return (
    <View className="flex-1 bg-black/95">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <LogoIcon />,
          headerRight: () => (
            <Link href="/about" style={{ color: "white" }} asChild>
              <Pressable className="active:opacity-50">
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
