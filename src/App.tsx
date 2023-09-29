import { registerRootComponent } from 'expo';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CategoriesPage from './pages/CategoriesPage';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './routes/Index';
import { NavigationContainer } from '@react-navigation/native';

export function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider className="flex-1">
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
registerRootComponent(App);
