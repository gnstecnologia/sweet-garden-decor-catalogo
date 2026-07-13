import { useState } from 'react';
import { ShoppingBag, Search, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { products } from './data';
import { CartItem, Product, Variation } from './types';

const ImageCarousel = () => {
  // Collect all unique images from products for the carousel
  const allImages = Array.from(new Set(products.flatMap(p => p.imageUrls || []))).filter(Boolean);

  if (allImages.length === 0) return null;

  const scrollLeft = () => {
    const scrollElement = document.getElementById('gallery-scroll');
    if (scrollElement) {
      scrollElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const scrollElement = document.getElementById('gallery-scroll');
    if (scrollElement) {
      scrollElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Nossa Coleção</h2>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollRight} className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div 
        id="gallery-scroll"
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allImages.map((src, index) => (
          <div 
            key={src} 
            className="flex-none w-64 h-80 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden snap-center group relative cursor-pointer"
          >
            <img
              src={encodeURI(src)}
              alt={`Galeria ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.dataset.triedFallback) {
                  target.dataset.triedFallback = 'true';
                  const base = src.substring(0, src.lastIndexOf('.'));
                  target.src = encodeURI(`${base}.jpg`);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>('Mais vendidos');
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product, variation: Variation) => {
    setCartItems(prev => {
      const existing = prev.findIndex(item => item.product.id === product.id && item.variation.id === variation.id);
      if (existing >= 0) {
        const newItems = [...prev];
        newItems[existing].quantity += 1;
        return newItems;
      }
      return [...prev, { product, variation, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    setCartItems(prev => {
      const newItems = [...prev];
      if (newQuantity === 0) {
        newItems.splice(index, 1);
      } else {
        newItems[index].quantity = newQuantity;
      }
      return newItems;
    });
  };

  const filteredProducts = products.filter(product => {
    if (category === 'Mais vendidos' && !product.isBestSeller) return false;
    if (category !== 'Mais vendidos' && product.category !== category) return false;
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-[#00A86B]" />
            <span className="text-xl font-bold text-gray-900">Catálogo</span>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-[#00A86B] text-white text-xs font-bold flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ImageCarousel />

          {/* Filters */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <button
                onClick={() => setCategory('Mais vendidos')}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-colors whitespace-nowrap ${category === 'Mais vendidos' ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <Star className="w-5 h-5" fill={category === 'Mais vendidos' ? "currentColor" : "none"} />
                Mais vendidos
              </button>
              <button
                onClick={() => setCategory('Vasos avulsos')}
                className={`flex items-center justify-center px-4 py-2.5 rounded-xl font-medium transition-colors whitespace-nowrap ${category === 'Vasos avulsos' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Vasos Avulsos
              </button>
              <button
                onClick={() => setCategory('Arranjos')}
                className={`flex items-center justify-center px-4 py-2.5 rounded-xl font-medium transition-colors whitespace-nowrap ${category === 'Arranjos' ? 'bg-[#00A86B] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Arranjos
              </button>
            </div>
            
            <div className="flex w-full md:w-auto justify-end">
              <div className="relative w-full sm:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar modelos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#00A86B] focus:border-[#00A86B] sm:text-sm transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Nenhum produto encontrado</h2>
              <p className="text-gray-600">Tente ajustar seus filtros de busca para encontrar o que procura.</p>
            </div>
          )}
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}
