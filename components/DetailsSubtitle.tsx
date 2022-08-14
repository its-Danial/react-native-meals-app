import { FC } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

type DetailsSubtitleProps = {
  children: React.ReactNode;
};

const DetailsSubtitle: FC<DetailsSubtitleProps> = (props) => {
  return (
    <View style={tw`m-1 p-2 border-b-2 border-slate-700 text-center`}>
      <Text style={tw`text-slate-300 font-bold text-lg text-center`}>{props.children}</Text>
    </View>
  );
};
export default DetailsSubtitle;
