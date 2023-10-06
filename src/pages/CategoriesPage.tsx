import { CATEGORIES, CATEGORYCOLORS } from '../data/categoriesData';
import { Dimensions } from 'react-native';
import CategoryGrid from '../components/categories/CategoryGrid';
import {
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export default function CategoriesPage({ navigation }: any) {
  const progress = useSharedValue(0);

  const inputRangeBG = CATEGORYCOLORS.map((_, i) => {
    return i;
  });

  const animatedBG = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [...inputRangeBG, inputRangeBG.length],
        [...CATEGORYCOLORS, CATEGORYCOLORS[0]],
      ),
    };
  });

  return (
    <AnimatedSafeAreaView style={animatedBG} className="flex-1">
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
              colors={itemData.item.colors}
              onPress={() => {
                navigation.navigate('MealsPage', {
                  categoryId: itemData.item.id,
                  colors: itemData.item.colors,
                });
              }}
            />
          );
        }}
        onProgressChange={(_, b) => {
          progress.value = b;
        }}
      />
    </AnimatedSafeAreaView>
  );
}
