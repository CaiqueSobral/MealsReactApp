import React, { useState } from 'react';
import { CATEGORIES, CATEGORYCOLORS } from '../data/dummyData';
import { Animated, Dimensions, SafeAreaView, View } from 'react-native';
import CategoryGrid from '../components/categories/CategoryGrid';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';

export default function CategoriesPage({ navigation }: any) {
  const insets = useSafeAreaInsets();
  let backColor = '#ffefd7';

  const changeBackColor = (currentI: number) => {
    backColor = backColor;
  };

  const ViewInsets = {
    paddingTop: insets.top,
    paddingRight: insets.right,
    paddingLeft: insets.left,
    paddingBottom: insets.bottom,
  };

  return (
    <Animated.View
      style={[{ backgroundColor: backColor }, ViewInsets]}
      className="flex-1"
    >
      <Carousel
        data={CATEGORIES}
        width={Dimensions.get('window').width}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxAdjacentItemScale: 0.5,
        }}
        renderItem={(itemData) => {
          return (
            <CategoryGrid
              title={itemData.item.title}
              imageName={itemData.item.imageName}
              pros={itemData.item.pros}
              cons={itemData.item.cons}
            />
          );
        }}
      />
    </Animated.View>
  );
}
