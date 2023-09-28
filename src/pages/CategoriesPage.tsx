import React from 'react';
import { CATEGORIES } from '../data/dummyData';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import Category from '../models/category';
import CategoryGrid from '../components/CategoryGrid';
import { SafeAreaView } from 'react-native-safe-area-context';

const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
  return (
    <CategoryGrid title={itemData.item.title} color={itemData.item.color} />
  );
};

export default function CategoriesPage() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <FlatList
          className="flex-1"
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={(itemData) => {
            return renderCategoryItem(itemData);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
