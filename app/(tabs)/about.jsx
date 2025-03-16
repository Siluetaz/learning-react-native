import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import Screen from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <Text className="text-white font-bold text-lg">About this project</Text>
      <Text className="text-white">
        This project is a simple movie rating app built with React Native and
        Tailwind CSS. It uses The Movie Database (TMDb) API to fetch the latest
        movies.
      </Text>
      <Text className="text-white">
        The project is part of the{" "}
        <Link
          href="https://www.smashingmagazine.com/2021/07/react-native-web-apps-expo/"
          target="_blank"
          rel="noreferrer"
        >
          React Native Web Apps With Expo And Vite
        </Link>{" "}
        tutorial on Smashing Magazine.
      </Text>
      <Text className="text-white">
        This project is for educational purposes only. Feel free to use it as a
        starting point for your own projects.
      </Text>
    </Screen>
  );
}
