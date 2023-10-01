import Meal from '../models/meal';
import { MEALS } from '../data/mealsData';
import React from 'react';
import { Dimensions, ListRenderItemInfo, View } from 'react-native';
import MealCard from '../components/meals/MealCard';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MealsPage({ route }: any) {
  const catId = route.params.categoryId;
  const colors = route.params.colors;

  const mealsByCategory = MEALS.filter((mealItem) => {
    return mealItem.categoryId === catId;
  });

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors[1] }}>
      <Carousel
        data={mealsByCategory}
        width={Dimensions.get('window').width}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxAdjacentItemScale: 0.5,
        }}
        renderItem={(itemData) => {
          return <MealCard meal={itemData.item} colors={colors} />;
        }}
      />
    </SafeAreaView>
  );
}
