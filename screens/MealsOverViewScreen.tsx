import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useLayoutEffect } from "react";
import { FlatList, View } from "react-native";
import tw from "twrnc";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import { RootStackParamList } from "../types/RootStackParamList";

type MealsOverViewScreenProps = NativeStackScreenProps<RootStackParamList, "MealsOverView">;

const MealsOverViewScreen: FC<MealsOverViewScreenProps> = (props) => {
  const categoryId = props.route.params.categoryId;

  useLayoutEffect(() => {
    const categoryName = CATEGORIES.find((category) => category.id === categoryId)?.title;
    props.navigation.setOptions({ title: categoryName });
  }, [categoryId, props.navigation]);

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const mealPressHandler = (mealId: string) => {
    props.navigation.navigate("MealsDetails", { mealId: mealId });
  };

  const renderMealItem = ({ item }: { item: Meal }) => {
    return <MealItem meal={item} onPress={mealPressHandler} />;
  };

  return (
    <View style={tw`flex-1 p-4`}>
      <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
};
export default MealsOverViewScreen;
