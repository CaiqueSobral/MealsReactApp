import { registerRootComponent } from 'expo';
import React, { useCallback, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './routes/Index';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Text } from 'react-native';

SplashScreen.preventAutoHideAsync();

export function App() {
  let [fontsLoaded] = useFonts({
    'LilitaOne': require('../assets/Fonts/LilitaOne.ttf'),
    'Rubik': require('../assets/Fonts/Rubik-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider className="flex-1" onLayout={onLayoutRootView}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
registerRootComponent(App);
