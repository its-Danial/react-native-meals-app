import Ionicons from "@expo/vector-icons/Ionicons";
import { FC, useState } from "react";
import tw from "twrnc";
import { Pressable } from "react-native";

type IconButtonProps = {
  onPress: () => void;
};

const IconButton: FC<IconButtonProps> = (props) => {
  const [iconColor, setIconColor] = useState("white");

  const onPressHandler = () => {
    props.onPress();
    setIconColor((prevSate) => {
      if (prevSate === "white") {
        return "red";
      } else {
        return "white";
      }
    });
  };
  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => [tw` rounded-lg overflow-hidden`, pressed ? tw`opacity-50` : null]}
    >
      <Ionicons name="heart" size={24} color={iconColor} />
    </Pressable>
  );
};
export default IconButton;
