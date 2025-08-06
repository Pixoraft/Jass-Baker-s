export interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  price: number;
  image: string;
  images?: string[];
  category: 'cake' | 'dessert' | 'bread' | 'hamper';
  ingredients?: string[];
  allergens?: string[];
  weight?: string;
  serves?: number;
  preparationTime?: string;
  shelfLife?: string;
}

export const products: Product[] = [
  {
    id: 'tri-colour-cake',
    name: 'Tri Colour Cake',
    description: 'Patriotic layers of saffron, white, and green sponge cake',
    detailedDescription: 'Our signature Tri Colour Cake celebrates the spirit of patriotism with three beautiful layers representing the Indian flag. Each layer is made with premium 100% eggless sponge, flavored with natural saffron for the orange layer, vanilla for the white, and cardamom for the green layer. Perfect for Independence Day, Republic Day, or any celebration of national pride.',
    price: 600,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'cake',
    weight: '1 kg',
    serves: 8,
    preparationTime: '2-3 hours',
    shelfLife: '2 days',
    ingredients: ['Refined flour', 'Sugar', 'Butter', 'Milk', 'Saffron', 'Cardamom', 'Vanilla essence', 'Baking powder'],
    allergens: ['Gluten', 'Dairy']
  },
  {
    id: 'fresh-fruit-cake',
    name: 'Fresh Fruit Cake',
    description: 'Seasonal fruits on vanilla sponge with whipped cream',
    detailedDescription: 'A light and refreshing cake topped with an abundance of fresh seasonal fruits. Our eggless vanilla sponge is layered with silky whipped cream and decorated with the finest quality fruits including strawberries, kiwi, grapes, and seasonal selections. This cake is perfect for summer celebrations and health-conscious customers.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'cake',
    weight: '1 kg',
    serves: 10,
    preparationTime: '3-4 hours',
    shelfLife: '1 day',
    ingredients: ['Vanilla sponge', 'Fresh cream', 'Seasonal fruits', 'Sugar syrup', 'Gelatin'],
    allergens: ['Gluten', 'Dairy']
  },
  {
    id: 'lotus-biscoff-cake',
    name: 'Lotus Biscoff Cake',
    description: 'Rich caramel cake with Lotus Biscoff cream and crumbles',
    detailedDescription: 'Indulge in the luxurious taste of Belgium with our Lotus Biscoff Cake. This premium dessert features layers of moist caramel sponge filled with creamy Biscoff spread and topped with crushed Biscoff cookies. Every bite delivers the perfect balance of caramelized sweetness and crunchy texture that has made Lotus Biscoff a global favorite.',
    price: 1080,
    image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'cake',
    weight: '1 kg',
    serves: 12,
    preparationTime: '4-5 hours',
    shelfLife: '3 days',
    ingredients: ['Caramel sponge', 'Lotus Biscoff spread', 'Cream cheese', 'Butter', 'Biscoff cookies', 'Vanilla'],
    allergens: ['Gluten', 'Dairy', 'Nuts']
  },
  {
    id: 'chocolate-pudding',
    name: 'Chocolate Pudding',
    description: 'Silky smooth chocolate pudding with whipped cream',
    detailedDescription: 'A decadent individual serving of pure chocolate bliss. Our chocolate pudding is made with premium Belgian cocoa and slow-cooked to achieve the perfect creamy consistency. Topped with a dollop of freshly whipped cream and a sprinkle of chocolate shavings, it\'s the ultimate treat for chocolate lovers.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1541636430039-b1ec99ce635d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'dessert',
    weight: '150g',
    serves: 1,
    preparationTime: '30 minutes',
    shelfLife: '2 days',
    ingredients: ['Belgian cocoa', 'Milk', 'Sugar', 'Cornstarch', 'Vanilla', 'Cream'],
    allergens: ['Dairy']
  },
  {
    id: 'pizza-base',
    name: 'Pizza Base',
    description: 'Fresh handmade pizza base, ready for your toppings',
    detailedDescription: 'Artisanal pizza bases made fresh daily using traditional techniques. Our dough is prepared with premium flour and allowed to rise slowly for 24 hours, creating the perfect texture - crispy on the outside and soft on the inside. No preservatives, no artificial additives, just pure wholesome goodness ready for your favorite toppings.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'bread',
    weight: '200g',
    serves: 2,
    preparationTime: '24 hours (with rising)',
    shelfLife: '3 days',
    ingredients: ['Refined flour', 'Yeast', 'Olive oil', 'Salt', 'Sugar', 'Water'],
    allergens: ['Gluten']
  },
  {
    id: 'gift-hampers',
    name: 'Gift Hampers',
    description: 'Curated selection of our finest pastries and treats',
    detailedDescription: 'Thoughtfully curated gift hampers perfect for any occasion. Each hamper contains a delightful assortment of our premium baked goods including mini cakes, cookies, pastries, and seasonal specialties. Beautifully packaged in elegant boxes with ribbon, these hampers make the perfect gift for festivals, birthdays, corporate events, or just to show someone you care.',
    price: 500,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'hamper',
    weight: 'Varies',
    serves: 4-6,
    preparationTime: '1 day advance notice',
    shelfLife: 'Varies by items',
    ingredients: ['Assorted baked goods', 'Packaging materials', 'Decorative elements'],
    allergens: ['Varies by selection']
  }
];

export const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    alt: 'Elegant wedding cake'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    alt: 'Colorful birthday cake'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    alt: 'Assorted cupcakes'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    alt: 'Chocolate tart'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    alt: 'Fresh pastries'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    alt: 'Decorated cookies'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    alt: 'Gift box with treats'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    alt: 'Artisanal bread'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Model Town, Jalandhar',
    rating: 5,
    review: 'The custom birthday cake for my daughter was absolutely perfect! Beautiful design and tasted amazing. Being 100% eggless was a huge plus for our family.',
    initials: 'PS'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Civil Lines, Jalandhar',
    rating: 5,
    review: 'Ordered through WhatsApp and received my anniversary cake perfectly on time. The Lotus Biscoff cake was incredible! Will definitely order again.',
    initials: 'RK'
  },
  {
    id: 3,
    name: 'Anita Malik',
    location: 'Nehru Garden, Jalandhar',
    rating: 5,
    review: 'Best bakery in Jalandhar! Their gift hampers are beautifully packaged and taste divine. Great service and quality every time.',
    initials: 'AM'
  }
];
