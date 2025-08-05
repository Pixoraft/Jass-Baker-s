export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cake' | 'dessert' | 'bread' | 'hamper';
}

export const products: Product[] = [
  {
    id: 'tri-colour-cake',
    name: 'Tri Colour Cake',
    description: 'Patriotic layers of saffron, white, and green sponge cake',
    price: 600,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'cake'
  },
  {
    id: 'fresh-fruit-cake',
    name: 'Fresh Fruit Cake',
    description: 'Seasonal fruits on vanilla sponge with whipped cream',
    price: 750,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'cake'
  },
  {
    id: 'lotus-biscoff-cake',
    name: 'Lotus Biscoff Cake',
    description: 'Rich caramel cake with Lotus Biscoff cream and crumbles',
    price: 1080,
    image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'cake'
  },
  {
    id: 'chocolate-pudding',
    name: 'Chocolate Pudding',
    description: 'Silky smooth chocolate pudding with whipped cream',
    price: 75,
    image: 'https://images.unsplash.com/photo-1541636430039-b1ec99ce635d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'dessert'
  },
  {
    id: 'pizza-base',
    name: 'Pizza Base',
    description: 'Fresh handmade pizza base, ready for your toppings',
    price: 60,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'bread'
  },
  {
    id: 'gift-hampers',
    name: 'Gift Hampers',
    description: 'Curated selection of our finest pastries and treats',
    price: 500,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'hamper'
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
