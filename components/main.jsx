import { View, ActivityIndicator, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import { getLatestMovies } from "../lib/themoviedb";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LogoIcon from "./Icons/LogoIcon";
import { AnimatedMovieCard } from "./GameCard";

export function Main() {
  const [movies, setMovies] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        console.log("error->", error);
      });
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          paddingBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <LogoIcon />
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
          movie.rate
        </Text>
      </View>
      {movies.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.slug}
          renderItem={({ item, index }) => (
            <AnimatedMovieCard movie={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
