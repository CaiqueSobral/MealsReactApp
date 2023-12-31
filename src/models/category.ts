import { ImageProps } from 'react-native';
import categoryInterface from '../interfaces/categoryInterface';

export default class Category implements categoryInterface {
  id: string;
  title: string;
  imageName: ImageProps;
  pros: string[];
  cons: string[];
  colors: string[];

  constructor(
    id: string,
    title: string,
    imageName: ImageProps,
    pros: string[],
    cons: string[],
    colors: string[],
  ) {
    this.id = id;
    this.title = title;
    this.imageName = imageName;
    this.pros = pros;
    this.cons = cons;
    this.colors = colors;
  }
}
