import { ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { getLatestMovies } from "../../lib/themoviedb";
import { AnimatedMovieCard } from "../../components/MovieCard";
import Screen from "../../components/Screen";

export default function Index() {
  const [movies, setMovies] = useState([]);

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
    <Screen className="flex-1">
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
    </Screen>
  );
}
