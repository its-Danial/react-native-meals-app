import { FC } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

type DetailsListProps = {
  data: string[];
};

const DetailsList: FC<DetailsListProps> = (props) => {
  return (
    <>
      {props.data.map((dataPoint) => (
        <View style={tw`px-2 py-1 m-1 bg-slate-800 rounded-lg`} key={dataPoint}>
          <Text style={tw`text-slate-400 text-center`}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
};
export default DetailsList;
