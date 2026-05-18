import type { FeaturedDrink, HeroItem } from '@/lib/types';

export const HERO_ITEMS: HeroItem[] = [
  { name: 'Coconut Mango Boom', subtitle: 'Fresh mango & coconut with handcrafted toppings.' },
  { name: 'Dalgona Bubble Tea', subtitle: 'Whipped coffee foam over classic boba milk tea.' },
  { name: 'Cream Brulee Matcha', subtitle: 'Roasted cream top over smooth matcha latte.' },
  { name: 'Chocolate Korean Bingsu', subtitle: 'Shaved ice dessert with rich chocolate toppings.' },
  { name: 'Raspberry Cheese Ice Blend', subtitle: 'Tart raspberry with creamy cheesecake blend.' },
];

export const FEATURED_DRINKS: FeaturedDrink[] = [
  { name: 'Coconut Mango Boom', shortLabel: 'Coconut', price: '5.9' },
  { name: 'Dalgona Bubble Tea', shortLabel: 'Dalgona', price: '5.5' },
  { name: 'Cream Brulee Matcha', shortLabel: 'Matcha', price: '5.9' },
  { name: 'Chocolate Korean Bingsu', shortLabel: 'Bingsu', price: '5.9' },
];

export const MENU_CATEGORIES = [
  'Best Seller',
  'Bingsu',
  'Tofu Pudding',
  'Signature Brulee',
  'Ice Blend',
  'Fruit Tea',
] as const;

export type MenuCategory = typeof MENU_CATEGORIES[number];

export const PRODUCTS_BY_CATEGORY: Record<MenuCategory, FeaturedDrink[]> = {
  'Best Seller': [
    { name: 'Chocolate Brown Sugar Boba', shortLabel: 'Chocolate', price: '5.9' },
    { name: 'Coconut Mango Boom', shortLabel: 'Coconut', price: '5.9' },
    { name: 'Matcha Creme Brulee', shortLabel: 'Matcha', price: '5.9' },
    { name: 'Chocolate Korean Bingsu', shortLabel: 'Bingsu', price: '5.9' },
    { name: 'Raspberry Cheese Ice Blend', shortLabel: 'Raspberry', price: '5.5' },
  ],
  'Bingsu': [
    { name: 'Oreo Bingsu', shortLabel: 'Oreo', price: '5.9' },
    { name: 'Mango Bingsu', shortLabel: 'Mango', price: '5.9' },
    { name: 'Matcha Bingsu', shortLabel: 'Matcha', price: '5.9' },
    { name: 'Strawberry Bingsu', shortLabel: 'Strawberry', price: '5.9' },
    { name: 'Chocolate Bingsu', shortLabel: 'Chocolate', price: '5.9' },
    { name: 'Watermelon Bingsu', shortLabel: 'Watermelon', price: '5.9' },
  ],
  'Tofu Pudding': [
    { name: 'Classic Tofu Pudding', shortLabel: 'Classic', price: '4.9' },
    { name: 'Chocolate Tofu Pudding', shortLabel: 'Chocolate', price: '5.2' },
    { name: 'Coconut Milk Tofu Pudding', shortLabel: 'Coconut', price: '5.2' },
    { name: 'Mango Tofu Pudding', shortLabel: 'Mango', price: '5.2' },
    { name: 'Brown Sugar Boba Tofu Pudding', shortLabel: 'Boba', price: '5.5' },
  ],
  'Signature Brulee': [
    { name: 'Cream Brulee Chocolate', shortLabel: 'Chocolate', price: '6.2' },
    { name: 'Cream Brulee Matcha', shortLabel: 'Matcha', price: '6.2' },
    { name: 'Cream Brulee Nutella', shortLabel: 'Nutella', price: '6.5' },
  ],
  'Ice Blend': [
    { name: 'Matcha Ice Blend', shortLabel: 'Matcha', price: '5.5' },
    { name: 'Chocolate Ice Blend', shortLabel: 'Chocolate', price: '5.5' },
    { name: 'Blueberry Ice Blend', shortLabel: 'Blueberry', price: '5.5' },
    { name: 'Raspberry Ice Blend', shortLabel: 'Raspberry', price: '5.5' },
    { name: 'Strawberry Ice Blend', shortLabel: 'Strawberry', price: '5.5' },
  ],
  'Fruit Tea': [
    { name: 'Strawberry Peach Oolong Tea', shortLabel: 'Strawberry', price: '5.2' },
    { name: 'Cheese Cream Strawberry Tea', shortLabel: 'Cheese', price: '5.8' },
    { name: 'Cheese Cream Mango Tea', shortLabel: 'Mango', price: '5.8' },
    { name: 'Mango Matcha', shortLabel: 'Mango', price: '5.5' },
    { name: 'Blueberry Green Tea', shortLabel: 'Blueberry', price: '5.2' },
    { name: 'Coconut Mango Boom', shortLabel: 'Coconut', price: '5.9' },
  ],
};
