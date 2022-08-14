import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "twrnc";

type CategoryGridTitleProps = {
  title: string;
  color: string;
  onPress: () => void;
};

const CategoryGridTitle: FC<CategoryGridTitleProps> = (props) => {
  return (
    <View
      style={tw`flex-1 m-4 h-[150px] rounded-lg shadow-offset-[0px]/[2px] bg-white shadow-black shadow-opacity-25 shadow-radius-[8px] android:overflow-hidden `}
    >
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => [tw`flex-1 rounded-lg bg-[${props.color}]`, pressed ? tw`opacity-50` : null]}
      >
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`font-bold text-lg`}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryGridTitle;
