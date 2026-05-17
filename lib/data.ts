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
  'Boba Milk Tea',
  'Matcha',
  'Fruit Tea',
  'Ice Blend',
  'Brelee',
  'Korean Bingsu',
  'Tofu Pudding',
  'Coffee',
] as const;
