import { FONTRUBIK } from '../../data/constants';
import { xIcon } from '../../data/mealsData';
import React from 'react';
import { Image, Text, View } from 'react-native';

type Props = {
  yn?: boolean;
  title: string;
  icon: any;
};
export default function MealAttribute(props: Props) {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="h-[40%] w-[40%] mb-2">
        <Image
          source={props.yn ? props.icon : xIcon}
          style={{
            height: undefined,
            width: undefined,
          }}
          className="flex-1"
        />
      </View>
      <View className="flex">
        <Text style={FONTRUBIK}>
          {!props.yn ? 'Not ' : ''}
          {props.title}
        </Text>
      </View>
    </View>
  );
}
