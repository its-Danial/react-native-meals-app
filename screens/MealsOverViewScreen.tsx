import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useLayoutEffect } from "react";
import MealsList from "../components/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
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

  return <MealsList meals={displayMeals} />;
};
export default MealsOverViewScreen;
