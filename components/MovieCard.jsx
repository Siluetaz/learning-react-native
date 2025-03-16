import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Score from "./Score";
import { Link } from "expo-router";

export function MovieCard({ movie }) {
  return (
    <Link href={`/${movie.slug}`} asChild>
      <Pressable className="active:opacity-70 border border-black active:border-white/50 bg-slate-500/10 rounded-xl p-4 mb-2">
        <View key={movie.slug} className="flex-row gap-4 ">
          <Image source={{ uri: movie.image }} style={styles.image} />
          <View className="flex-col gap-3 flex-shrink">
            <Text className={"text-xl font-bold text-white"}>
              {movie.title}
            </Text>
            <Score score={movie.score} maxScore={10} />
            <Text className={"text-white flex-shrink"}>
              {movie.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
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
