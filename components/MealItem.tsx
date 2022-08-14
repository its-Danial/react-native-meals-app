import { FC } from "react";
import { View, Text, Pressable, Image } from "react-native";
import tw from "twrnc";
import Meal from "../models/meal";
import MealsDetailsText from "./MealsDetailsText";

type MealItemProps = { meal: Meal; onPress: (mealId: string) => void };

const MealItem: FC<MealItemProps> = ({ meal, onPress }) => {
  const mealPressHandler = () => {
    onPress(meal.id);
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
          <Image style={tw`w-full h-[200px]`} source={{ uri: meal.imageUrl }} />
          <Text style={tw`font-bold text-center text-lg m-1 text-slate-200`}>{meal.title}</Text>
          <MealsDetailsText affordability={meal.affordability} complexity={meal.complexity} duration={meal.duration} />
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;
