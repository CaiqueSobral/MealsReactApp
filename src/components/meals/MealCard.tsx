import Meal from '../../models/meal';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native/Libraries/Utilities/Dimensions';
import MealAttribute from './mealsAtts';
import {
  glutenFreeIcon,
  lactoseFreeIcon,
  veganIcon,
  vegetarianIcon,
} from '../../data/mealsData';

type Props = {
  meal: Meal;
  colors: string;
};

export default function MealCard(props: Props) {
  const mealsComplexity = props.meal.complexity.toLowerCase();
  const mediumBarColor = () => {
    if (mealsComplexity === 'medium' || mealsComplexity === 'hard') {
      return true;
    }
    return false;
  };

  const hardBarColor = () => {
    if (mealsComplexity === 'hard') {
      return true;
    }
    return false;
  };

  const renderImageView = () => {
    return (
      <View className="flex-1 justify-center items-center">
        <View className="w-[80%] h-[80%] shadow-3xl shadow-gray-600">
          <Image
            style={{
              width: undefined,
              height: undefined,
            }}
            source={{ uri: props.meal.imageUrl }}
            className="flex-1 rounded-3xl"
          />
        </View>
      </View>
    );
  };

  const renderDifficulty = () => {
    return (
      <View className="flex-row h-[8px] w-[70%] gap-x-1">
        <View className="flex-1 bg-green-400 rounded-l-full"></View>
        <View
          className={`flex-1 ${
            mediumBarColor() ? 'bg-yellow-400' : 'bg-gray-200'
          }`}
        ></View>
        <View
          className={`flex-1 ${
            hardBarColor() ? 'bg-red-400' : 'bg-gray-200'
          } rounded-r-full`}
        ></View>
      </View>
    );
  };

  const renderInfos = () => {
    return (
      <View
        className="flex-1 flex
         self-center w-[80%] rounded-3xl pt-4"
        style={{ backgroundColor: props.colors[1] }}
      >
        <View>
          <View className="flex">
            <Text className="text-center text-xl font-semibold">
              {props.meal.title}
            </Text>
          </View>
          <View className="flex-row mt-4 py-2">
            <View className="flex-1 items-center pb-2 justify-center">
              <Text className="mb-2 text-center font-medium">
                {props.meal.complexity}
              </Text>
              {renderDifficulty()}
            </View>
            <View className="w-[2px] h-[100%] bg-gray-400"></View>
            <View className="flex-1 items-center justify-center">
              <Text className="text-xl font-bold text-gray-600">
                {props.meal.affordability}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-1">{renderAttrs()}</View>
      </View>
    );
  };

  const renderAttrs = () => {
    return (
      <View className="flex-1 flex self-center flex-row">
        <View className="flex-1">
          <MealAttribute
            title={'Gluten Free'}
            icon={glutenFreeIcon}
            yn={props.meal.isGlutenFree}
          />
          <MealAttribute
            title={'Vegan'}
            icon={veganIcon}
            yn={props.meal.isVegan}
          />
        </View>
        <View className="flex-1">
          <MealAttribute
            title={'Vegetarian'}
            icon={vegetarianIcon}
            yn={props.meal.isVegetarian}
          />
          <MealAttribute
            title={'Lactose Free'}
            icon={lactoseFreeIcon}
            yn={props.meal.isLactoseFree}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={{ backgroundColor: props.colors[0] }}
      className="flex-1 rounded-3xl m-4 pb-6"
    >
      {renderImageView()}
      {renderInfos()}
    </View>
  );
}
