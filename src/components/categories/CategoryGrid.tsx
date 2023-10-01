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
        className="w-[90%] mx-2 shadow-xl self-center rounded-3xl"
        style={{ backgroundColor: props.colors[1] }}
      >
        <Text className="text-center font-extrabold text-3xl" style={FONTRUBIK}>
          {props.title}
        </Text>
      </View>
    );
  };

  const renderProsAndConsView = () => {
    return (
      <View className="flex-1 flex-row">
        <ProsAndConsCard
          isPro={true}
          data={props.pros}
          color={props.colors[1]}
        />
        <ProsAndConsCard
          isPro={false}
          data={props.cons}
          color={props.colors[1]}
        />
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
        {renderProsAndConsView()}
      </View>
    </Pressable>
  );
}
