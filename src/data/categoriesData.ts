import Category from '../models/category';

const c1 = new Category(
  'c1',
  'Italy',
  require('../../assets/images/flags/italy.png'),
  ['Easy cook', 'Cheese', 'Pizza', 'Pasta'],
  ['The same', 'Tiramisu', 'Bread'],
  ['#ffea95', '#fff5ca'],
);

const c2 = new Category(
  'c2',
  'Germany',
  require('../../assets/images/flags/germany.png'),
  ['Strudel', 'Sausage', 'Dessert', 'Pretzel'],
  ['Fatty', 'Seasoning'],
  ['#88cb76', '#c4e5bb'],
);

const c3 = new Category(
  'c3',
  'Japan',
  require('../../assets/images/flags/japan.png'),
  ['Salmon', 'Ramen', 'Healthy'],
  ['Raw food', 'Chopstick', 'N-Veggie'],
  ['#897dc4', '#c4bee2'],
);

const c4 = new Category(
  'c4',
  'France',
  require('../../assets/images/flags/france.png'),
  ['Duck', 'Fancy', 'Soup'],
  ['N-Veggie', '$$$$'],
  ['#f7909c', '#fbc8ce'],
);

export const CATEGORIES = [c1, c2, c3, c4];
export const CATEGORYCOLORS = CATEGORIES.map((item) => {
  return item.colors[1];
});
