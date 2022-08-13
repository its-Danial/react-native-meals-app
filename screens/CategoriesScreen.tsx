import { FC } from "react";
import { View, Text, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";
import { RootStackParamList } from "../types/RootStackParamList";

type CategoriesScreenProps = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

const CategoriesScreen: FC<CategoriesScreenProps> = (props) => {
  const renderCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      props.navigation.navigate("MealsOverView");
    };
    return <CategoryGridTitle onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />;
  };
  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />;
};
export default CategoriesScreen;
