import React from "react";
import { Text, View } from "react-native";

const Score = ({ score, maxScore }) => {
  const getColors = () => {
    const percentagee = (score / maxScore) * 100;
    if (percentagee < 40) return "bg-red-500";
    if (percentagee < 65) return "bg-yellow-500";
    return "bg-green-500";
  };

  const className = getColors();

  return (
    <View
      className={`flex items-center justify-center w-8 h-8 rounded-full ${className}`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
};

export default Score;
