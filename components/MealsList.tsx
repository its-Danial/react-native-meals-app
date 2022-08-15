import { FC } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import Meal from "../models/meal";
import MealItem from "./MealItem";

type MealsListProps = {
  meals: Meal[];
};

const MealsList: FC<MealsListProps> = ({ meals }) => {
  const navigation = useNavigation();

  const mealPressHandler = (mealId: string) => {
    navigation.navigate("MealsDetails" as never, { mealId: mealId } as never);
  };

  const renderMealItem = ({ item }: { item: Meal }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} onPress={mealPressHandler} />;
  };

  return <FlatList style={tw`p-4`} data={meals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />;
};
export default MealsList;
