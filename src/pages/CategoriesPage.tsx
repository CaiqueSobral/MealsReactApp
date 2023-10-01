import { CATEGORIES, CATEGORYCOLORS } from '../data/categoriesData';
import { Dimensions } from 'react-native';
import CategoryGrid from '../components/categories/CategoryGrid';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function CategoriesPage({ navigation }: any) {
  const insets = useSafeAreaInsets();
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

  const ViewInsets = {
    paddingTop: insets.top,
    paddingRight: insets.right,
    paddingLeft: insets.left,
    paddingBottom: insets.bottom,
  };

  return (
    <Animated.View style={[animatedBG, ViewInsets]} className="flex-1">
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
                navigation.navigate('MealsPage' as never, {
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
    </Animated.View>
  );
}
