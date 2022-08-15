import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";
import MealsDetailsText from "./MealsDetailsText";

type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  duration: string;
  complexity: string;
  affordability: string;
  onPress: (mealId: string) => void;
};

const MealItem: FC<MealItemProps> = ({ id, title, imageUrl, duration, complexity, affordability, onPress }) => {
  const mealPressHandler = () => {
    onPress(id);
  };

  return (
    <View
      style={tw`m-4 rounded-lg shadow-offset-[0px]/[2px] bg-slate-800 shadow-slate-900 shadow-opacity-25 shadow-radius-[12px] android:overflow-hidden`}
    >
      <Pressable
        onPress={mealPressHandler}
        style={({ pressed }) => [tw`flex-1 rounded-lg overflow-hidden`, pressed ? tw`opacity-50` : null]}
      >
        <View style={tw`overflow-hidden`}>
          <Image style={tw`w-full h-[200px]`} source={{ uri: imageUrl }} />
          <Text style={tw`font-bold text-center text-lg m-1 text-slate-200`}>{title}</Text>
          <MealsDetailsText affordability={affordability} complexity={complexity} duration={duration} />
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;
