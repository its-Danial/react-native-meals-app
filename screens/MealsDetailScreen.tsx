import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useLayoutEffect } from "react";
import tw from "twrnc";
import { Image, ScrollView, Text, View } from "react-native";
import DetailsList from "../components/DetailsList";
import DetailsSubtitle from "../components/DetailsSubtitle";
import IconButton from "../components/IconButton";
import MealsDetailsText from "../components/MealsDetailsText";
import { MEALS } from "../data/dummy-data";
import { RootStackParamList } from "../types/RootStackParamList";

type MealsDetailScreenProps = NativeStackScreenProps<RootStackParamList, "MealsDetails">;

const MealsDetailScreen: FC<MealsDetailScreenProps> = (props) => {
  const selectedMeal = MEALS.find((meal) => meal.id === props.route.params.mealId);

  const headerButtonPressHandler = () => {
    console.log("hello");
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({ headerRight: () => <IconButton onPress={headerButtonPressHandler} /> });
  }, []);

  return (
    <ScrollView style={tw`mb-14`}>
      <Image style={tw`w-full h-[300px] hover:scale-105`} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={tw`text-white font-bold text-xl text-center my-2`}>{selectedMeal?.title}</Text>
      <MealsDetailsText
        affordability={selectedMeal?.affordability}
        complexity={selectedMeal?.complexity}
        duration={selectedMeal?.duration}
        textStyle={"text-slate-100"}
      />
      <View style={tw`items-center`}>
        <View style={tw`w-[85%]`}>
          <DetailsSubtitle>Ingredients</DetailsSubtitle>
          <DetailsList data={selectedMeal?.ingredients} />
          <DetailsSubtitle>Steps</DetailsSubtitle>
          <DetailsList data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealsDetailScreen;
