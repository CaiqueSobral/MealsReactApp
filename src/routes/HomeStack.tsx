import HomePage from '../pages/HomePage';
import CategoriesPage from '../pages/CategoriesPage';
import MealsPage from '../pages/MealsPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const SCREENS = [
  {
    name: 'HomePage',
    component: HomePage,
  },
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
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'slide_from_right',
      }}
    >
      {SCREENS.map((screenData, i) => {
        return (
          <Stack.Screen
            key={i}
            name={screenData.name}
            component={screenData.component}
          ></Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
}
