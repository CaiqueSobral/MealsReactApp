import React from 'react';
import { Image, Text, View } from 'react-native';
import { FONTRUBIK } from '../../data/constants';

type Props = {
  isPro: boolean;
  data: string[];
  color: string;
};
export default function ProsAndConsCard(props: Props) {
  return (
    <View
      style={{ backgroundColor: props.color }}
      className={`flex-1 ${
        props.isPro ? 'ml-4 mr-2' : 'mr-4 ml-2'
      } my-4 items-start justify-center px-4 rounded-3xl shadow-xl`}
    >
      {props.data.map((item, i) => {
        return (
          <View className="flex-row items-center my-2" key={i}>
            <Image
              source={
                props.isPro
                  ? require('../../../assets/icons/pros.png')
                  : require('../../../assets/icons/cons.png')
              }
              className="w-5 h-5 mr-2"
            />
            <Text className="text-2xl font-semibold" style={FONTRUBIK}>
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
