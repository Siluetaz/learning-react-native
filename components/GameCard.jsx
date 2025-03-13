import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export function MovieCard({ movie }) {
  return (
    <View key={movie.slug} style={styles.card}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Text style={styles.score}>{movie.score}</Text>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>
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
  card: { marginBottom: 20 },
  image: { width: 107, height: 147, borderRadius: 10 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 5,
  },
});
