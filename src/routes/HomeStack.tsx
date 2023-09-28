import CategoriesPage from '../pages/CategoriesPage';
import MealsPage from '../pages/MealsPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const SCREENS = [
  {
    name: 'Categories',
    component: CategoriesPage,
  },
  {
    name: 'MealsPage',
    component: MealsPage,
  },
];

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'slide_from_right',
      }}
    >
      {SCREENS.map((screenData) => {
        return (
          <Stack.Screen
            name={screenData.name}
            component={screenData.component}
          ></Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
}