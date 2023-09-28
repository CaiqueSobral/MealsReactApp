import { registerRootComponent } from 'expo';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CategoriesPage from './pages/CategoriesPage';
import { StatusBar } from 'expo-status-bar';

export function App() {
  return (
    <SafeAreaProvider className="flex-1">
      <StatusBar style="light" />
      <CategoriesPage />
    </SafeAreaProvider>
  );
}
registerRootComponent(App);
