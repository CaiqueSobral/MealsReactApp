import categoryInterface from '../interfaces/categoryInterface';

export default class Category implements categoryInterface {
  id: string;
  title: string;
  color: string;

  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}
