import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title: string;
  color: string;
  onPress?: () => void;
};

export default function CategoryGrid(props: Props) {
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        style={{ backgroundColor: props.color }}
        className={`w-[85%] h-40 m-4 items-center justify-center rounded-3xl shadow-2xl`}
        onPress={props.onPress}
      >
        <Text className="text-center font-bold text-lg">{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
