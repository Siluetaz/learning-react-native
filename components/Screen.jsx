import { View } from "react-native";
import React from "react";

export default function Screen({ className, children }) {
  return (
    <View className={`bg-black/95 px-2 pt-2 h-screen ${className}`}>
      {children}
    </View>
  );
}
