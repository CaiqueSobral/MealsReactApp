import HomePage from '../pages/HomePage';
import CategoriesPage from '../pages/CategoriesPage';
import MealsPage from '../pages/MealsPage';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, { ReactElement, ReactNode } from 'react';

type StackParamList = {
  HomePage: undefined;
  Categories: undefined;
  MealsPage: { categoryId: string; colors: Array<string> };
};

export type HomePageScreenProps = NativeStackScreenProps<
  StackParamList,
  'HomePage'
>;
export type CategoriesScreenProps = NativeStackScreenProps<
  StackParamList,
  'Categories'
>;
export type MealsPageScreenProps = NativeStackScreenProps<
  StackParamList,
  'MealsPage'
>;

const Stack = createNativeStackNavigator<StackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
      <Stack.Screen name="Categories" component={CategoriesPage}></Stack.Screen>
      <Stack.Screen name="MealsPage" component={MealsPage}></Stack.Screen>
    </Stack.Navigator>
  );
}
