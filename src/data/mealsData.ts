import Meal from '../models/meal';

export const glutenFreeIcon = require('../../assets/icons/meals/glutenFree.png');
export const lactoseFreeIcon = require('../../assets/icons/meals/lactoseFree.png');
export const veganIcon = require('../../assets/icons/meals/vegan.png');
export const vegetarianIcon = require('../../assets/icons/meals/vegetarian.png');
export const xIcon = require('../../assets/icons/meals/x.png');

export const MEALS = [
  new Meal(
    'm1',
    'c1',
    'Spaghetti',
    '$$',
    'easy',
    'https://i.pinimg.com/474x/c9/18/84/c9188488f6470f804446a4580217a03b.jpg',
    false,
    true,
    true,
    true,
  ),
  new Meal(
    'm2',
    'c1',
    'Cheese Pizza',
    '$$',
    'Medium',
    'https://img.freepik.com/vetores-gratis/fatia-voadora-de-ilustracao-em-vetor-pizza-dos-desenhos-animados-vetor-isolado-conceito-de-fast-food-estilo-flat-cartoon_138676-1934.jpg?size=626&ext=jpg&ga=GA1.1.38838237.1696109821&semt=ais',
    false,
    false,
    true,
    false,
  ),
  new Meal(
    'm3',
    'c1',
    'Lasagna',
    '$$$',
    'Hard',
    'https://img.freepik.com/vetores-premium/ilustracao-de-lasanha-italiana_718155-5.jpg?size=626&ext=jpg&ga=GA1.1.38838237.1696109821&semt=ais',
    false,
    false,
    false,
    false,
  ),
  new Meal(
    'm3',
    'c2',
    'Pretzel',
    '$',
    'Medium',
    'https://img.freepik.com/vetores-premium/vector-pretzel-food-cartoon-vector-illustration_261519-19.jpg?size=626&ext=jpg&ga=GA1.1.38838237.1696109821&semt=ais',
    false,
    false,
    true,
    false,
  ),
  new Meal(
    'm3',
    'c2',
    'Strudel',
    '$$',
    'Medium',
    'https://img.freepik.com/vetores-gratis/recurso-de-design-de-adesivo-de-morango-desenhado-a-mao-vetorizado_53876-162482.jpg?size=626&ext=jpg&ga=GA1.2.38838237.1696109821&semt=ais',
    false,
    false,
    true,
    false,
  ),
  new Meal(
    'm3',
    'c2',
    'Strudel',
    '$$',
    'Medium',
    'https://img.freepik.com/vetores-gratis/recurso-de-design-de-adesivo-de-morango-desenhado-a-mao-vetorizado_53876-162482.jpg?size=626&ext=jpg&ga=GA1.2.38838237.1696109821&semt=ais',
    false,
    false,
    true,
    false,
  ),
];
