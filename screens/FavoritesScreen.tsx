import React, { FC, useEffect, useLayoutEffect } from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { useAppSelector } from "../hooks/useRedux";
type FavoritesScreenProps = {};

const FavoritesScreen: FC<FavoritesScreenProps> = (props) => {
  const favoriteMealIds = useAppSelector((state) => state.favoriteMeals);

  let favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-slate-300 text-base`}>You don't have any favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList meals={favoriteMeals} />;
};

export default FavoritesScreen;
