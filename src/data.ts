import { Product } from './types';

/** Fotos de vasos juntos enviadas para a faixa "Nossa coleção". */
export const collectionImages: string[] = [
  '/img/colecao/colecao-p1.jpg',
  '/img/colecao/colecao-p1.png',
  '/img/colecao/colecao-p2-jfif.jpg',
  '/img/colecao/colecao-p2.jpg',
  '/img/colecao/colecao-p3.jpg',
  '/img/colecao/colecao-p11.jpg',
  '/img/colecao/colecao-p12.jpg',
  '/img/colecao/colecao-p20.jpg',
  '/img/colecao/colecao-p22.jpg',
  '/img/colecao/colecao-p24.jpg',
  '/img/colecao/colecao-01.jpg',
  '/img/colecao/colecao-02.jpg',
  '/img/colecao/colecao-03.jpg',
  '/img/colecao/colecao-04.jpg',
  '/img/colecao/colecao-05.jpg',
  '/img/colecao/colecao-06.jpg',
  '/img/colecao/colecao-07.jpg',
  '/img/colecao/colecao-08.jpg',
  '/img/colecao/colecao-09.jpg',
  '/img/colecao/colecao-10.jpg',
  '/img/colecao/colecao-11.jpg',
  '/img/colecao/colecao-12.jpg',
  '/img/colecao/colecao-13.jpg',
  '/img/colecao/colecao-14.png',
  '/img/colecao/colecao-15.jpg',
  '/img/colecao/colecao-16.jpg',
  '/img/colecao/colecao-17.jpg'
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Modelo Cônico Slim',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 80x35; 60x35 (AxØ)',
    imageUrls: [
      '/img/conico-slim-isolado.jpg',
      '/img/conico-slim-tamanhos.jpg',
      '/img/conico-slim-ambiente.jpg'
    ],
    variations: [
      { id: '1-p', name: 'P', price: 780 },
      { id: '1-m', name: 'M', price: 890 }
    ]
  },
  {
    id: '5',
    name: 'Modelo Aura Slim',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 80x35; 60x35; 40x35 (AxØ)',
    imageUrls: ['/img/aura-slim-isolado.jpg', '/img/aura-slim-tamanhos.jpg', '/img/aura-slim-ambiente.jpg'],
    variations: [
      { id: '5-p', name: 'P', price: 690 },
      { id: '5-m', name: 'M', price: 790 },
      { id: '5-g', name: 'G', price: 890 }
    ]
  },
  {
    id: '4',
    name: 'Modelo Bali',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 107x48; 85x48; 70x48 (AxØ)',
    imageUrls: ['/img/bali-isolado.jpg', '/img/bali-tamanhos.jpg', '/img/bali-ambiente.jpg'],
    variations: [
      { id: '4-p', name: 'P', price: 1140 },
      { id: '4-m', name: 'M', price: 1550 },
      { id: '4-g', name: 'G', price: 1680 }
    ]
  },
  {
    id: '3',
    name: 'Modelo Elegance',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 100x48; 80x48; 70x48 (AxØ)',
    imageUrls: ['/img/elegance-isolado.jpg', '/img/elegance-tamanhos.jpg', '/img/elegance-ambiente.jpg'],
    variations: [
      { id: '3-p', name: 'P', price: 940 },
      { id: '3-m', name: 'M', price: 1000 },
      { id: '3-g', name: 'G', price: 1340 }
    ]
  },
  {
    id: '14',
    name: 'Modelo Essence',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 120x40 (AxØ)',
    imageUrls: ['/img/essence-isolado.jpg', '/img/essence-ambiente.jpg'],
    variations: [{ id: '14-u', name: 'Único', price: 1980 }]
  },
  {
    id: '11',
    name: 'Modelo Tulipa',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 100x35 (AxØ)',
    imageUrls: ['/img/tulipa-isolado.jpg', '/img/tulipa-ambiente.jpg'],
    variations: [{ id: '11-u', name: 'Único', price: 980 }]
  },
  {
    id: '10',
    name: 'Modelo Cônico Fit',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 90x40 (AxØ)',
    imageUrls: ['/img/conico-fit-isolado.jpg', '/img/conico-fit-ambiente.jpg'],
    variations: [{ id: '10-u', name: 'Único', price: 990 }]
  },
  {
    id: '2',
    name: 'Modelo Amarílis',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 80x28 (AxØ)',
    imageUrls: ['/img/amarilis-isolado.jpg', '/img/amarilis-ambiente.jpg'],
    variations: [{ id: '2-u', name: 'Único', price: 790 }]
  },
  {
    id: '9',
    name: 'Modelo Cônico 70',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 70x45 (AxØ)',
    imageUrls: ['/img/conico-70-isolado.jpg', '/img/conico-70-ambiente.jpg'],
    variations: [{ id: '9-u', name: 'Único', price: 800 }]
  },
  {
    id: '12',
    name: 'Modelo Pote',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 65x52 (AxØ)',
    imageUrls: ['/img/pote-isolado.jpg', '/img/pote-ambiente.jpg'],
    variations: [{ id: '12-u', name: 'Único', price: 1550 }]
  },
  {
    id: '6',
    name: 'Modelo Barril',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 63x65 (AxØ)',
    imageUrls: ['/img/barril-isolado.jpg', '/img/barril-ambiente.jpg'],
    variations: [{ id: '6-u', name: 'Único', price: 960 }]
  },
  {
    id: '7',
    name: 'Modelo Bolinha',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 35x40 (AxØ)',
    imageUrls: ['/img/bolinha-isolado.jpg', '/img/bolinha-ambiente.jpg'],
    variations: [{ id: '7-u', name: 'Único', price: 840 }]
  },
  {
    id: '13',
    name: 'Modelo Mantova',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 125x75; 97x60; 80x40 (AxØ)',
    imageUrls: ['/img/mantova-isolado.jpg', '/img/mantova-tamanhos.jpg', '/img/mantova-ambiente.jpg'],
    variations: [
      { id: '13-p', name: 'P', price: 1980 },
      { id: '13-m', name: 'M', price: 2200 },
      { id: '13-g', name: 'G', price: 2980 }
    ]
  },
  {
    id: '16',
    name: 'Modelo Turim',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 110x75; 80x60 (AxØ)',
    imageUrls: ['/img/turim-isolado.jpg', '/img/turim-tamanhos.jpg', '/img/turim-ambiente.jpg'],
    variations: [
      { id: '16-m', name: 'M', price: 2000 },
      { id: '16-g', name: 'G', price: 2800 }
    ]
  },
  {
    id: '15',
    name: 'Modelo Fênix',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 100x85; 120x85 (AxØ)',
    imageUrls: ['/img/fenix-isolado.jpg', '/img/fenix-tamanhos.jpg', '/img/fenix-ambiente.jpg'],
    variations: [
      { id: '15-m', name: 'M', price: 2200 },
      { id: '15-g', name: 'G', price: 2800 }
    ]
  },
  {
    id: '18',
    name: 'Cônico Clássico',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 67x51; 71x61; 80x70 (AxØ)',
    imageUrls: ['/img/conico-classico-isolado.jpg', '/img/conico-classico-tamanhos.jpg', '/img/conico-classico-ambiente.jpg'],
    variations: [
      { id: '18-p', name: 'P', price: 800 },
      { id: '18-m', name: 'M', price: 1100 },
      { id: '18-g', name: 'G', price: 1250 }
    ]
  },
  {
    id: '8',
    name: 'Modelo Bacia',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 25x82; 25x68; 25x56; 20x50; 10x45 (AxØ)',
    imageUrls: ['/img/bacia-isolado.jpg', '/img/bacia-tamanhos.jpg', '/img/bacia-ambiente.jpg'],
    variations: [
      { id: '8-p', name: 'P', price: 790 },
      { id: '8-m', name: 'M', price: 800 },
      { id: '8-m2', name: 'M2', price: 850 },
      { id: '8-g', name: 'G', price: 1280 },
      { id: '8-gg', name: 'GG', price: 1450 }
    ]
  },
  {
    id: '17',
    name: 'Modelo Cônico Aura',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 60x46; 80x56 (AxØ)',
    imageUrls: ['/img/conico-aura-isolado.jpg'],
    variations: [
      { id: '17-m', name: 'M', price: 980 },
      { id: '17-g', name: 'G', price: 1290 }
    ]
  },
  {
    id: '19',
    name: 'Modelo Gota',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 66x70; 70x78 (AxØ)',
    imageUrls: ['/img/gota-isolado.jpg', '/img/gota-tamanhos.jpg', '/img/gota-ambiente.jpg'],
    variations: [
      { id: '19-m', name: 'M', price: 1450 },
      { id: '19-g', name: 'G', price: 1980 }
    ]
  },
  {
    id: '20',
    name: 'Modelo Bola',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 60x90 (AxØ)',
    imageUrls: ['/img/bola-isolado.jpg', '/img/bola-ambiente.jpg'],
    variations: [{ id: '20-u', name: 'Único', price: 2340 }]
  },
  {
    id: '41',
    name: 'Floreiras Retangulares Sob medida',
    category: 'Vasos avulsos',
    description: '',
    variations: [{ id: '41-u', name: 'Único', price: 0 }]
  },
  {
    id: '21',
    name: 'Modelo Pera com arranjo floral de orquídeas',
    category: 'Arranjos',
    description: 'Especificações Técnicas: 18x25cm; 22x25cm',
    variations: [
      { id: '21-p', name: 'P: 2 hastes', price: 490 },
      { id: '21-g', name: 'G: 2 hastes', price: 540 }
    ]
  },
  {
    id: '22',
    name: 'Modelo Íris com arranjo floral de orquídeas',
    category: 'Arranjos',
    description: 'Especificações Técnicas: 22X10cm; 27X10cm; 30x10cm',
    imageUrls: ['/img/iris-g.jpg', '/img/iris-m.jpg'],
    variations: [
      { id: '22-p', name: 'P: 2 hastes', price: 490 },
      { id: '22-m', name: 'M: 6 hastes', price: 990 },
      { id: '22-g', name: 'G: 10 hastes', price: 1390 }
    ]
  },
  {
    id: '23',
    name: 'Modelo Pétala com arranjo de alecrim',
    category: 'Arranjos',
    description: 'Especificações Técnicas: 10x10',
    imageUrls: ['/img/petala.jpg'],
    variations: [{ id: '23-u', name: 'Único', price: 190 }]
  },
  {
    id: '24',
    name: 'Modelo Cereja com arranjo de orquídeas',
    category: 'Arranjos',
    description: 'Especificações Técnicas: 25x28cm',
    imageUrls: ['/img/cereja.jpg'],
    variations: [{ id: '24-u', name: 'Único', price: 490 }]
  },
  {
    id: '25',
    name: 'Modelo Cônico Slim com Bambu Semi Artificial',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/conico-slim-bambu-japones-premium.jpg'],
    isBestSeller: true,
    defaultVariationId: '25-m',
    variations: [
      { id: '25-p', name: 'P', price: 1920 },
      { id: '25-m', name: 'M', price: 1990 }
    ]
  },
  {
    id: '26',
    name: 'Modelo Cônico Slim com Fícus Lyrata M artificial',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/conico-slim-ambiente.jpg'],
    isBestSeller: true,
    variations: [
      { id: '26-p', name: 'P', price: 2370 },
      { id: '26-m', name: 'M', price: 2440 }
    ]
  },
  {
    id: '27',
    name: 'Modelo Cônico Slim com Bambu Japonês Premium M',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/conico-slim-ambiente.jpg'],
    isBestSeller: true,
    variations: [
      { id: '27-p', name: 'P', price: 2980 },
      { id: '27-m', name: 'M', price: 3050 }
    ]
  },
  {
    id: '28',
    name: 'Modelo Cônico Slim com Ravenala Artificial',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/conico-slim-ambiente.jpg'],
    isBestSeller: true,
    variations: [
      { id: '28-p', name: 'P', price: 2170 },
      { id: '28-m', name: 'M', price: 2240 }
    ]
  },
  {
    id: '36',
    name: 'Modelo Cônico Fit com Palmeira Artificial',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/conico-fit-ambiente.jpg'],
    isBestSeller: true,
    variations: [{ id: '36-u', name: 'Único', price: 1570 }]
  },
  {
    id: '37',
    name: 'Modelo Cônico Fit com Bambu Semi Artificial',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/conico-fit-ambiente.jpg'],
    isBestSeller: true,
    variations: [{ id: '37-u', name: 'Único', price: 2130 }]
  },
  {
    id: '29',
    name: 'Modelo Cônico Slim com Bambu Mosso Preservado',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/conico-slim-ambiente.jpg'],
    isBestSeller: true,
    variations: [
      { id: '29-p', name: 'P', price: 0 },
      { id: '29-m', name: 'M', price: 0 }
    ]
  },
  {
    id: '30',
    name: 'Modelo Amarílis com Bambu Semi Artificial M',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/amarilis-ambiente.jpg'],
    isBestSeller: true,
    variations: [{ id: '30-u', name: 'Único', price: 1270 }]
  },
  {
    id: '31',
    name: 'Modelo Amarílis com Strelitzia P',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/amarilis-ambiente.jpg'],
    isBestSeller: true,
    variations: [{ id: '31-u', name: 'Único', price: 2090 }]
  },
  {
    id: '32',
    name: 'Modelo Amarílis com Strelitzia M',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/amarilis-ambiente.jpg'],
    isBestSeller: true,
    variations: [{ id: '32-u', name: 'Único', price: 2290 }]
  },
  {
    id: '33',
    name: 'Modelo Elegance com Bambu Japonês Premium M',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/elegance-ambiente.jpg'],
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
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/elegance-ambiente.jpg'],
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
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/essence-ambiente.jpg'],
    isBestSeller: true,
    variations: [{ id: '35-u', name: 'Único', price: 3570 }]
  },
  {
    id: '38',
    name: 'Modelo Tulipa com Strelitzia P artificial',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/tulipa-ambiente.jpg'],
    isBestSeller: true,
    variations: [{ id: '38-u', name: 'Único', price: 2370 }]
  },
  {
    id: '39',
    name: 'Modelo Tulipa com Strelitzia M artificial',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/tulipa-ambiente.jpg'],
    isBestSeller: true,
    variations: [{ id: '39-u', name: 'Único', price: 2570 }]
  },
  {
    id: '40',
    name: 'Modelo Tulipa com Bambu Semi Artificial 3 hastes',
    category: 'Mais vendidos',
    description: '',
    imageUrls: ['/img/tulipa-ambiente.jpg'],
    isBestSeller: true,
    variations: [{ id: '40-u', name: 'Único', price: 1570 }]
  }
];
