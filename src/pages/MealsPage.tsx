import Meal from '../models/meal';
import { MEALS } from '../data/dummyData';
import React from 'react';
import { Dimensions, FlatList, ListRenderItemInfo } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MealCard from '../components/MealCard';

export default function MealsPage({ route }: any) {
  const catId = route.params.categoryId;

  const mealsByCategory = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  const renderMealData = (
    itemData: ListRenderItemInfo<Meal>,
    flatHeight: number,
  ) => {
    return <MealCard mealName={itemData.item.title} height={flatHeight} />;
  };

  const HEIGHT =
    Dimensions.get('window').height -
    useSafeAreaInsets().bottom -
    useSafeAreaInsets().top;

  return (
    <SafeAreaView className="flex-1 px-4 py-2">
      <FlatList
        pagingEnabled
        data={mealsByCategory}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealData(itemData, HEIGHT)}
      />
    </SafeAreaView>
  );
}
