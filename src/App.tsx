import { registerRootComponent } from 'expo';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CategoriesPage from './pages/CategoriesPage';

export function App() {
  return (
    <SafeAreaProvider className="flex-1">
      <CategoriesPage />
    </SafeAreaProvider>
  );
}
registerRootComponent(App);
