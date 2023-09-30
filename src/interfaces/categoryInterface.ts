import { ImageProps } from 'react-native';

export default interface categoryInterface {
  id: string;
  title: string;
  imageName: ImageProps;
  pros: string[];
  cons: string[];
  colors: string[];
}
