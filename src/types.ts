export interface Variation {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  variations: Variation[];
  imageUrls?: string[];
  isBestSeller?: boolean;
  imageFit?: 'contain' | 'cover' | 'fill';
  imagePosition?: string;
  imageScale?: number;
}

export interface CartItem {
  product: Product;
  variation: Variation;
  quantity: number;
}
