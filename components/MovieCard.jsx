import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import Score from "./Score";

export function MovieCard({ movie }) {
  return (
    <View
      key={movie.slug}
      className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
    >
      <Image source={{ uri: movie.image }} style={styles.image} />
      <View className="flex-col gap-3">
        <Text className={"text-xl font-bold text-white"}>{movie.title}</Text>
        <Score score={movie.score} maxScore={100} />
        <Text className={"text-white flex-shrink"}>
          {movie.description.slice(0, 100)}...
        </Text>
      </View>
    </View>
  );
}
export function AnimatedMovieCard({ movie, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <MovieCard movie={movie} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: { width: 107, height: 147, borderRadius: 10 },
});
