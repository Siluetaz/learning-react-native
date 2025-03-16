import React from "react";
import { Text, View } from "react-native";

const Score = ({ score, maxScore }) => {
  const getColors = () => {
    const percentagee = (score / maxScore) * maxScore;
    if (percentagee < 3) return "bg-red-500";
    if (percentagee < 7) return "bg-yellow-500";
    return "bg-green-500";
  };

  const className = getColors();
  return (
    <View
      className={`flex items-center justify-center w-9 h-9 rounded-full ${className}`}
    >
      <Text className="text-base font-bold text-white">{score.toFixed(1)}</Text>
    </View>
  );
};

export default Score;
