import Meal from '../../models/meal';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native/Libraries/Utilities/Dimensions';

type Props = {
  meal: Meal;
};

export default function MealCard(props: Props) {
  return (
    <View className="flex-1 bg-slate-500 rounded-3xl">
      <Text>{props.meal.title}</Text>
    </View>
  );
}
