import React from 'react';
import { Image, ImageProps, Text, TouchableOpacity, View } from 'react-native';
import ProsAndConsCard from './ProsAndConsCard';

type Props = {
  title: string;
  imageName: ImageProps;
  pros: string[];
  cons: string[];
  onPress?: () => void;
};

export default function CategoryGrid(props: Props) {
  const renderImageView = () => {
    return (
      <View className="flex-1 justify-center items-center">
        <View className="w-[80%] h-[80%] shadow-2xl shadow-gray-600">
          <Image
            style={{
              width: undefined,
              height: undefined,
            }}
            source={props.imageName}
            className="flex-1 rounded-3xl"
          />
        </View>
      </View>
    );
  };

  const renderTitleView = () => {
    return (
      <View>
        <Text className="text-center font-extrabold text-3xl">
          {props.title}
        </Text>
      </View>
    );
  };

  const renderProsAndConsView = () => {
    return (
      <View className="flex-1 flex-row">
        <ProsAndConsCard isPro={true} data={props.pros} />
        <ProsAndConsCard isPro={false} data={props.cons} />
      </View>
    );
  };
  return (
    <TouchableOpacity
      className="flex-1 bg-slate-400 m-4 rounded-3xl shadow-2xl"
      onPress={props.onPress}
    >
      <View className="flex-1">
        {renderImageView()}
        {renderTitleView()}
        {renderProsAndConsView()}
      </View>
    </TouchableOpacity>
  );
}
