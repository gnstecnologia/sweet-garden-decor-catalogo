import { CartItem } from '../types';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.variation.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gray-900" />
            <h2 className="text-lg font-bold text-gray-900">Seu Carrinho</h2>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingBag className="w-12 h-12 mb-4 text-gray-300" />
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.variation.id}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                    {item.product.imageUrls?.[0] ? (
                      <img
                        src={item.product.imageUrls[0]}
                        alt={item.product.name}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100" />
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 line-clamp-2">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Tamanho: {item.variation.name}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQuantity(index, Math.max(0, item.quantity - 1))}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-white rounded transition-colors shadow-sm"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-white rounded transition-colors shadow-sm"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold text-gray-900">
                        R$ {(item.variation.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500">Total</span>
              <span className="text-2xl font-bold text-gray-900">
                R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <button
              onClick={() => {
                const text = `Olá! Gostaria de finalizar a compra dos seguintes itens:\n\n${items.map(item => `- ${item.quantity}x ${item.product.name} (Tamanho: ${item.variation.name}) - R$ ${(item.variation.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`).join('\n')}\n\n*Total: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}*`;
                window.open(`https://api.whatsapp.com/send?phone=5592991054688&text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#128C7E] transition-colors"
            >
              Finalizar Pedido via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
