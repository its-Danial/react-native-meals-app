import Ionicons from "@expo/vector-icons/Ionicons";
import { FC, useState } from "react";
import tw from "twrnc";
import { Pressable } from "react-native";
import { useAppSelector } from "../hooks/useRedux";

type IconButtonProps = {
  onPress: () => void;
  color: string;
  icon: any;
};

const IconButton: FC<IconButtonProps> = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [tw` rounded-lg overflow-hidden`, pressed ? tw`opacity-50` : null]}
    >
      <Ionicons name={props.icon} size={24} color={props.color} />
    </Pressable>
  );
};
export default IconButton;
