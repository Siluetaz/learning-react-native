import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { getMovieDetails } from "../lib/themoviedb";
import { useEffect, useState } from "react";
import Screen from "../components/Screen";
import Score from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => {
        console.log("error->", error);
      });
  }, [id]);

  return (
    <Screen>
      {!movie ? (
        <ActivityIndicator />
      ) : (
        <>
          <Stack.Screen
            options={{
              headerLeft: () => {},
              headerTitle: movie.title,
            }}
          />
          <View className="flex-col gap-5 p-2 py-3">
            <View className="flex-row gap-2">
              <Image
                source={{ uri: movie.poster }}
                className="rounded-lg"
                style={{ width: 120, height: 150 }}
              />
              <View className="gap-2">
                <Text className="text-white font-semibold text-lg">
                  {movie.title}
                </Text>
                <Score score={movie.vote_average} maxScore={10} />
              </View>
            </View>
            <Text className="text-white text-lg">{movie.overview}</Text>
            <Image
              source={{ uri: movie.backdrop }}
              style={{ width: "100%", height: 200 }}
            />
          </View>
        </>
      )}
    </Screen>
  );
}
