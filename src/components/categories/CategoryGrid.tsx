import React from 'react';
import { Image, ImageProps, Pressable, Text, View } from 'react-native';
import ProsAndConsCard from './ProsAndConsCard';
import { FONTRUBIK } from '../../data/constants';

type Props = {
  title: string;
  imageName: ImageProps;
  pros: string[];
  cons: string[];
  colors: string[];
  onPress?: () => void;
};

export default function CategoryGrid(props: Props) {
  const renderImageView = () => {
    return (
      <View className="flex-1 justify-center items-center">
        <View className="w-[80%] h-[80%] shadow-3xl shadow-gray-600">
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
      <View
        className="flex-1 w-[90%] shadow-xl self-center rounded-3xl mb-6"
        style={{ backgroundColor: props.colors[1] }}
      >
        <View className="flex-1 items-center justify-center">
          <Text
            className="mt-4 text-center uppercase text-4xl text-gray-700"
            style={FONTRUBIK}
          >
            {props.title}
          </Text>
        </View>

        {renderProsAndConsView()}
      </View>
    );
  };

  const renderProsAndConsView = () => {
    return (
      <View className="flex-[3] flex-row">
        <ProsAndConsCard isPro={true} data={props.pros} />
        <View className="h-[70%] w-[2px] bg-gray-700 self-center" />
        <ProsAndConsCard isPro={false} data={props.cons} />
      </View>
    );
  };
  return (
    <Pressable
      className={`flex-1 m-4 rounded-3xl shadow-2xl`}
      style={{ backgroundColor: props.colors[0] }}
      onPress={props.onPress}
    >
      <View className="flex-1">
        {renderImageView()}
        {renderTitleView()}
      </View>
    </Pressable>
  );
}
