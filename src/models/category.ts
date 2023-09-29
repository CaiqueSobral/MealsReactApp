import categoryInterface from '../interfaces/categoryInterface';

export default class Category implements categoryInterface {
  id: string;
  title: string;
  image: string;
  pros: string[];
  cons: string[];

  constructor(
    id: string,
    title: string,
    image: string,
    pros: string[],
    cons: string[],
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.pros = pros;
    this.cons = cons;
  }
}
