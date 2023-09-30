import Meal from '../models/meal';
import { MEALS } from '../data/mealsData';
import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MealCard from '../components/meals/MealCard';

export default function MealsPage({ route }: any) {
  const catId = route.params.categoryId;

  const mealsByCategory = MEALS.filter((mealItem) => {
    return mealItem.categoryId === catId;
  });

  console.log(mealsByCategory);

  const renderMealData = (itemData: ListRenderItemInfo<Meal>) => {
    return <MealCard meal={itemData.item} />;
  };

  return (
    <SafeAreaView className="flex-1 py-4 px-4">
      <MealCard meal={mealsByCategory[0]} />
    </SafeAreaView>
  );
}
