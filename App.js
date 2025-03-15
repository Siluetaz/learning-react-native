import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Main } from "./components/main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./styles/global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="bg-black/95 flex-1 items-center justify-center">
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
