import { FC } from "react";
import { View, Text, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";
import { RootStackParamList } from "../types/RootStackParamList";
import Category from "../models/category";

type CategoriesScreenProps = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

const CategoriesScreen: FC<CategoriesScreenProps> = (props) => {
  // Note: Render Items
  const renderCategoryItem = ({ item }: { item: Category }) => {
    const pressHandler = () => {
      props.navigation.navigate("MealsOverView", { categoryId: item.id });
    };
    return <CategoryGridTitle onPress={pressHandler} title={item.title} color={item.color} />;
  };

  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />;
};
export default CategoriesScreen;
