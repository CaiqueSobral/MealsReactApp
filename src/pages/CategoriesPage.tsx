import React from 'react';
import { CATEGORIES } from '../data/dummyData';
import { ListRenderItemInfo } from 'react-native';
import Category from '../models/category';
import CategoryGrid from '../components/categories/CategoryGrid';
import { SafeAreaView } from 'react-native-safe-area-context';

const c1 = CATEGORIES[0];

export default function CategoriesPage({ navigation }: any) {
  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    function pressHandler() {
      navigation.navigate('MealsPage', { categoryId: itemData.item.id });
    }

    //return <CategoryGrid title={itemData.item.title} onPress={pressHandler} />;
  };

  return (
    <SafeAreaView className="flex-1">
      <CategoryGrid
        title={c1.title}
        imageName={c1.imageName}
        pros={c1.pros}
        cons={c1.cons}
      />
    </SafeAreaView>
  );
}
