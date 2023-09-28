import Meal from '@/models/meal';
import { MEALS } from '../data/dummyData';
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MealCard from '../components/MealCard';

export default function MealsPage({ route }: any) {
  const catId = route.params.categoryId;

  const mealsByCategory = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  const renderMealData = (itemData: ListRenderItemInfo<Meal>) => {
    return <MealCard mealName={itemData.item.title} />;
  };

  return (
    <SafeAreaView className="flex-1 p-4 ">
      <FlatList
        className="bg-white"
        data={mealsByCategory}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealData(itemData)}
      />
    </SafeAreaView>
  );
}
