import { FC } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

type MealsDetailsTextProps = {
  duration: string;
  complexity: string;
  affordability: string;
  style?: string;
  textStyle?: string;
};

const MealsDetailsText: FC<MealsDetailsTextProps> = ({ duration, complexity, affordability, style, textStyle }) => {
  return (
    <View style={tw`flex-row p-3 items-center justify-center overflow-hidden ${style ? style : ""}`}>
      <Text style={tw`text-sm mx-2 text-slate-300 ${textStyle ? textStyle : ""}`}>{duration}m</Text>
      <Text style={tw`uppercase text-sm mx-2 text-slate-300 ${textStyle ? textStyle : ""}`}>{complexity}</Text>
      <Text style={tw`uppercase text-sm mx-2 text-slate-300 ${textStyle ? textStyle : ""}`}>{affordability}</Text>
    </View>
  );
};
export default MealsDetailsText;
