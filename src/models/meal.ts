import mealInterface from '../interfaces/mealInterface';

export default class Meal implements mealInterface {
  id: string;
  categoryId: string;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;

  constructor(
    id: string,
    categoryId: string,
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean,
  ) {
    (this.id = id),
      (this.categoryId = categoryId),
      (this.title = title),
      (this.imageUrl = imageUrl),
      (this.complexity = complexity),
      (this.affordability = affordability),
      (this.isGlutenFree = isGlutenFree),
      (this.isVegan = isVegan),
      (this.isVegetarian = isVegetarian),
      (this.isLactoseFree = isLactoseFree);
  }
}
