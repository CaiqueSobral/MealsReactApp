import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native/Libraries/Utilities/Dimensions';

type Props = {
  mealName: string;
  height: number;
};

export default function MealCard(props: Props) {
  return (
    <View style={{ height: props.height }} className="bg-slate-500 rounded-3xl">
      <Text>{props.mealName}</Text>
    </View>
  );
}
