import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export function HomeIcon({ size = 24, color = "white", ...props }) {
  return <FontAwesome name="home" size={size} color={color} {...props} />;
}

export function CircleInfoIcon({ size = 24, color = "white", ...props }) {
  return (
    <FontAwesome6 name="circle-info" size={size} color={color} {...props} />
  );
}

export function InfoIcon({ size = 24, color = "white", ...props }) {
  return <FontAwesome name="info" size={size} color={color} {...props} />;
}
