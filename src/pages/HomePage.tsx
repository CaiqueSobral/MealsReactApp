import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONTLILITA } from '../data/constants';
import { HomePageScreenProps } from '@/routes/HomeStack';

export default function HomePage({ navigation }: HomePageScreenProps) {
  return (
    <SafeAreaView className="flex-1 p-4 bg-[#fff5ca]">
      <View className="flex-1 flex gap-y-10 mt-[15%]">
        <View className="flex rounded-3xl justify-center items-center">
          <Text
            className="text-center text-3xl bg-[#FFCC70] px-2 pt-1 rounded-t-xl shadow-xl"
            style={FONTLILITA}
          >
            DISCOVER FOOD
          </Text>
          <Text
            className="text-center text-3xl bg-[#FFCC70] px-2 rounded-xl pb-1"
            style={FONTLILITA}
          >
            AROUND THE WORLD
          </Text>
        </View>
        <View className="flex-[3]">
          <Image
            source={require('../../assets/images/bg.png')}
            resizeMode="contain"
            className="h-full w-full"
          />
        </View>
        <View className="flex-1 items-center">
          <TouchableOpacity
            onPress={() => navigation.navigate('Categories')}
            className="bg-[#FFCC70] h-[30%] w-[70%] justify-center rounded-2xl"
          >
            <Text style={FONTLILITA} className="text-2xl text-center">
              DISCOVER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
