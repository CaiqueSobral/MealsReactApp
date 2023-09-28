import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  mealName: string;
};

export default function MealCard(props: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-[#FFF6DC] rounded-3xl">
      <Text>{props.mealName}</Text>
    </View>
  );
}
