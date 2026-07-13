import { useState, useEffect } from 'react';
import { Product, Variation } from '../types';
import { MessageCircle, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const SmartImage = ({ initialSrc, alt, className }: { initialSrc: string, alt: string, className: string }) => {
  const [src, setSrc] = useState(initialSrc);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setSrc(encodeURI(initialSrc));
    setErrorCount(0);
  }, [initialSrc]);

  const handleError = () => {
    const base = initialSrc.substring(0, initialSrc.lastIndexOf('.'));
    const extensions = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG', '.webp'];
    
    if (errorCount < extensions.length) {
      setSrc(encodeURI(`${base}${extensions[errorCount]}`));
      setErrorCount(prev => prev + 1);
    } else {
      // Fallback to a placeholder if everything fails
      setSrc(`https://placehold.co/600x800/eeeeee/999999?text=${encodeURIComponent(alt)}`);
    }
  };

  return <img src={src} alt={alt} className={className} onError={handleError} />;
};

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, variation: Variation) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [selectedVariation, setSelectedVariation] = useState<Variation>(product.variations[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = product.imageUrls || [];
  const hasImages = images.length > 0;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group">
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
        <div className="absolute top-3 left-3 z-10">
          <span className="text-xs font-medium px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg whitespace-nowrap shadow-sm border border-gray-100/50">
            {product.category}
          </span>
        </div>
        {hasImages ? (
          <>
            <SmartImage
              initialSrc={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentImageIndex ? 'w-4 bg-gray-800' : 'w-1.5 bg-gray-400/60'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400">Sem imagem</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-base font-bold text-gray-900 leading-tight uppercase">
            {product.name}
          </h3>
        </div>

        <div className="flex flex-col mt-auto">
          <div className="flex flex-col gap-2 mb-6">
            {product.variations.length > 1 ? (
              <div className="relative w-full">
                <select
                  value={selectedVariation.id}
                  onChange={(e) => {
                    const variation = product.variations.find(v => v.id === e.target.value);
                    if (variation) setSelectedVariation(variation);
                  }}
                  className="appearance-none w-full bg-gray-50 border border-gray-100 text-gray-700 text-sm rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer font-medium hover:bg-gray-100 transition-colors"
                >
                  {product.variations.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name !== 'Único' ? `Tam: ${v.name} - ` : ''}{v.price === 0 ? 'Sob consulta' : `R$ ${v.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-100 text-gray-700 text-sm rounded-xl py-3 px-4 font-medium flex justify-between items-center w-full">
                <span>{product.variations[0].name !== 'Único' ? `Tam: ${product.variations[0].name}` : 'Tamanho Único'}</span>
                <span className="font-bold text-gray-900">{product.variations[0].price === 0 ? 'Sob consulta' : `R$ ${product.variations[0].price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>
              </div>
            )}
          </div>

          <p className="text-[10px] text-gray-500 text-center mb-5 px-2">
            {product.category === 'Arranjos'
              ? '* Valores referentes aos vasos com arranjos. Valores sujeitos à alterações conforme a variação de quantitativo de hastes florais ou folhagens.'
              : '* Valores referentes aos vasos avulsos sem plantas.'}
          </p>

          <div className="flex gap-3 mb-6">
            <button
              onClick={() => {
                const text = `Olá! Gostaria de solicitar um orçamento para o vaso ${product.name} (Tamanho: ${selectedVariation.name}).`;
                window.open(`https://api.whatsapp.com/send?phone=5592991054688&text=${encodeURIComponent(text)}`, '_blank');
              }}
              title="Solicitar orçamento via WhatsApp"
              className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
            <button
              onClick={() => onAddToCart(product, selectedVariation)}
              className="flex-1 flex items-center justify-center gap-2 h-12 bg-[#00A86B] text-white rounded-xl hover:bg-[#008c59] transition-colors font-medium text-lg"
            >
              <span className="text-xl font-light">+</span> Adicionar
            </button>
          </div>

          <div className="text-center">
            {product.description?.includes('Especificações Técnicas') ? (
              <div className="relative group inline-block">
                <span className="text-gray-500 text-[9px] tracking-wider uppercase cursor-help border-b border-dashed border-gray-400 pb-0.5 hover:text-gray-700 hover:border-gray-600 transition-colors">
                  Especificações Técnicas
                </span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 whitespace-nowrap">
                  <div className="bg-gray-900 text-white text-xs py-1.5 px-3 rounded-md shadow-lg relative">
                    Dim: {product.description.replace(/Especificações Técnicas:\s*/i, '').replace(/cm/gi, '').trim()}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            ) : (
              <span className="text-gray-500 text-[9px] tracking-wider uppercase whitespace-pre-line">
                {product.description}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
