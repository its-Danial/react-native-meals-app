import { FC } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

type MealsOverViewScreenProps = {};

const MealsOverViewScreen: FC<MealsOverViewScreenProps> = (props) => {
  return (
    <View style={tw`flex-1 p-4`}>
      <Text>MealsOverViewScreen</Text>
    </View>
  );
};
export default MealsOverViewScreen;
