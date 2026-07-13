import re

new_products = """
  {
    id: '25',
    name: 'Modelo Cônico Slim com Bambu Semi Artificial',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Cônico Slim 1.jpeg', '/Cônico Slim 2.jpeg'],
    isBestSeller: true,
    variations: [
      { id: '25-p', name: 'P', price: 1920 },
      { id: '25-m', name: 'M', price: 1990 }
    ]
  },
  {
    id: '26',
    name: 'Modelo Cônico Slim com Fícus Lyrata M artificial',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Cônico Slim 1.jpeg', '/Cônico Slim 2.jpeg'],
    isBestSeller: true,
    variations: [
      { id: '26-p', name: 'P', price: 2370 },
      { id: '26-m', name: 'M', price: 2440 }
    ]
  },
  {
    id: '27',
    name: 'Modelo Cônico Slim com Bambu Japonês Premium M',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Cônico Slim 1.jpeg', '/Cônico Slim 2.jpeg'],
    isBestSeller: true,
    variations: [
      { id: '27-p', name: 'P', price: 2980 },
      { id: '27-m', name: 'M', price: 3050 }
    ]
  },
  {
    id: '28',
    name: 'Modelo Cônico Slim com Ravenala Artificial',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Cônico Slim 1.jpeg', '/Cônico Slim 2.jpeg'],
    isBestSeller: true,
    variations: [
      { id: '28-p', name: 'P', price: 2170 },
      { id: '28-m', name: 'M', price: 2240 }
    ]
  },
  {
    id: '29',
    name: 'Modelo Cônico Slim com Bambu Mosso Preservado',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Cônico Slim 1.jpeg', '/Cônico Slim 2.jpeg'],
    isBestSeller: true,
    variations: [
      { id: '29-p', name: 'P', price: 0 },
      { id: '29-m', name: 'M', price: 0 }
    ]
  },
  {
    id: '30',
    name: 'Modelo Amarílis com Bambu Semi Artificial M',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Amarilis.png', '/Amarilis (1).png'],
    isBestSeller: true,
    variations: [
      { id: '30-u', name: 'Único', price: 1270 }
    ]
  },
  {
    id: '31',
    name: 'Modelo Amarílis com Strelitzia P',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Amarilis.png', '/Amarilis (1).png'],
    isBestSeller: true,
    variations: [
      { id: '31-u', name: 'Único', price: 2090 }
    ]
  },
  {
    id: '32',
    name: 'Modelo Amarílis com Strelitzia M',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Amarilis.png', '/Amarilis (1).png'],
    isBestSeller: true,
    variations: [
      { id: '32-u', name: 'Único', price: 2290 }
    ]
  },
  {
    id: '33',
    name: 'Modelo Elegance com Bambu Japonês Premium M',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Elegance.png'],
    isBestSeller: true,
    variations: [
      { id: '33-p', name: 'P', price: 3140 },
      { id: '33-m', name: 'M', price: 3200 },
      { id: '33-g', name: 'G', price: 3540 }
    ]
  },
  {
    id: '34',
    name: 'Modelo Elegance com Fícus Lyrata M',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Elegance.png'],
    isBestSeller: true,
    variations: [
      { id: '34-p', name: 'P', price: 2530 },
      { id: '34-m', name: 'M', price: 2590 },
      { id: '34-g', name: 'G', price: 2930 }
    ]
  },
  {
    id: '35',
    name: 'Modelo Essence com Fícus Lyrata M',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Essence.png'],
    isBestSeller: true,
    variations: [
      { id: '35-u', name: 'Único', price: 3570 }
    ]
  },
  {
    id: '36',
    name: 'Modelo Cônico Fit com Palmeira Artificial',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Cônico Fit.jpg'],
    isBestSeller: true,
    variations: [
      { id: '36-u', name: 'Único', price: 1570 }
    ]
  },
  {
    id: '37',
    name: 'Modelo Cônico Fit com Bambu Semi Artificial',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Cônico Fit.jpg'],
    isBestSeller: true,
    variations: [
      { id: '37-u', name: 'Único', price: 2130 }
    ]
  },
  {
    id: '38',
    name: 'Modelo Tulipa com Strelitzia P artificial',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Tulipa.png'],
    isBestSeller: true,
    variations: [
      { id: '38-u', name: 'Único', price: 2370 }
    ]
  },
  {
    id: '39',
    name: 'Modelo Tulipa com Strelitzia M artificial',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Tulipa.png'],
    isBestSeller: true,
    variations: [
      { id: '39-u', name: 'Único', price: 2570 }
    ]
  },
  {
    id: '40',
    name: 'Modelo Tulipa com Bambu Semi Artificial 3 hastes',
    category: 'Arranjos',
    description: 'Entrega, montagem e acabamentos incluídos (Manaus)\nAté 5x sem juros nos cartões de crédito',
    imageUrls: ['/Tulipa.png'],
    isBestSeller: true,
    variations: [
      { id: '40-u', name: 'Único', price: 1570 }
    ]
  }
"""

with open('/app/applet/src/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the trailing '];' and append the new products
if content.strip().endswith('];'):
    content = content.strip()[:-2] + ',' + new_products + '\n];\n'

with open('/app/applet/src/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added new products")
