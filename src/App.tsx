import { registerRootComponent } from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

export function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
registerRootComponent(App);
