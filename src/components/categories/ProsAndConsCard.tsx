import React from 'react';
import { Image, Text, View } from 'react-native';

type Props = {
  isPro: boolean;
  data: string[];
};
export default function ProsAndConsCard(props: Props) {
  const consImage = '../../../assets/icons/cons.png';
  const prosImage = '../../../assets/icons/pros.png';

  const renderProsCons = () => {
    <View>
      {props.data.map((item, i) => {
        return (
          <View>
            <Image source={{ uri: `${props.isPro ? prosImage : consImage}` }} />
            <Text className="text-center mb-4 text-2xl" key={i}>
              {item}
            </Text>
          </View>
        );
      })}
    </View>;
  };
  return (
    <View
      className={`flex-1 ${
        props.isPro ? 'ml-4 mr-2' : 'mr-4 ml-2'
      } my-4 items-center justify-center bg-slate-200 rounded-3xl`}
    >
      {props.data.map((item, i) => {
        return (
          <View className="flex-row items-center mb-6" key={i}>
            <Image
              source={
                props.isPro
                  ? require('../../../assets/icons/pros.png')
                  : require('../../../assets/icons/cons.png')
              }
              className="w-6 h-6 mr-2"
            />
            <Text className="text-3xl text-center">{item}</Text>
          </View>
        );
      })}
    </View>
  );
}
