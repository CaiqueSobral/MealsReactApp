import React from 'react';
import { CATEGORIES } from '../data/dummyData';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import Category from '../models/category';
import CategoryGrid from '../components/CategoryGrid';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CategoriesPage({ navigation }: any) {
  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    function pressHandler() {
      navigation.navigate('MealsPage', { categoryId: itemData.item.id });
    }

    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={(itemData) => {
          return renderCategoryItem(itemData);
        }}
      />
    </SafeAreaView>
  );
}
