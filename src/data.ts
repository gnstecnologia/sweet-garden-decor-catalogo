import { Product } from './types';

export const products: Product[] = [
  // Row 1
  {
    id: '1',
    name: 'Modelo Cônico Slim',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 60x35cm e 80x35cm',
    imageUrls: ['/Cônico Slim 1.jpeg', '/Cônico Slim 2.jpeg'],
    variations: [
      { id: '1-p', name: 'P', price: 780 },
      { id: '1-m', name: 'M', price: 890 }
    ]
  },
  {
    id: '2',
    name: 'Modelo Amarílis',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 80x28cm',
    imageUrls: ['/Amarilis.png', '/Amarilis (1).png'],
    variations: [
      { id: '2-u', name: 'Único', price: 790 }
    ]
  },
  {
    id: '4',
    name: 'Modelo Bali',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 70x48cm; 85x48cm; 1.07x48cm;',
    imageUrls: ['/Bali.jpg'],
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
    description: 'Especificações Técnicas: 70x48cm; 8x480cm e 100x48cm.',
    imageUrls: ['/Elegance.png'],
    variations: [
      { id: '3-p', name: 'P', price: 940 },
      { id: '3-m', name: 'M', price: 1000 },
      { id: '3-g', name: 'G', price: 1340 }
    ]
  },
  // Row 2
  {
    id: '5',
    name: 'Modelo Aura Slim',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 40x35cm; 60x35cm e 80x45cm',
    imageUrls: ['/Aura Slim.jpg'],
    variations: [
      { id: '5-p', name: 'P', price: 690 },
      { id: '5-m', name: 'M', price: 790 },
      { id: '5-g', name: 'G', price: 890 }
    ]
  },
  {
    id: '11',
    name: 'Modelo Tulipa',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 100x35cm',
    imageUrls: ['/Tulipa.png'],
    variations: [
      { id: '11-u', name: 'Único', price: 980 }
    ]
  },
  {
    id: '10',
    name: 'Modelo Cônico Fit',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 90x40cm',
    imageUrls: ['/Cônico Fit.jpg'],
    variations: [
      { id: '10-u', name: 'Único', price: 990 }
    ]
  },
  {
    id: '9',
    name: 'Modelo Cônico 70',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 70x45cm',
    imageUrls: ['/Cônico 70.png'],
    variations: [
      { id: '9-u', name: 'Único', price: 800 }
    ]
  },
  // Row 3
  {
    id: '14',
    name: 'Modelo Essence',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 120x40cm',
    imageUrls: ['/Essence.png'],
    variations: [
      { id: '14-u', name: 'Único', price: 1980 }
    ]
  },
  {
    id: '12',
    name: 'Modelo Pote',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 65x52cm',
    imageUrls: ['/Pote.png'],
    variations: [
      { id: '12-u', name: 'Único', price: 1550 }
    ]
  },
  {
    id: '6',
    name: 'Modelo Barril',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 63x65cm',
    imageUrls: ['/Barril.png'],
    variations: [
      { id: '6-u', name: 'Único', price: 960 }
    ]
  },
  {
    id: '7',
    name: 'Modelo Bolinha',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 35x40cm',
    imageUrls: ['/Bolinha.jpg'],
    variations: [
      { id: '7-u', name: 'Único', price: 840 }
    ]
  },
  // Row 4
  {
    id: '13',
    name: 'Modelo Mantova',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 80cmx40; 90x60cm e 125x75cm',
    imageUrls: ['/Mantova.jpg', '/Mantova2.jpg'],
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
    description: 'Especificações Técnicas: 80x60cm e 110x75cm',
    imageUrls: ['/Turim.jpg'],
    variations: [
      { id: '16-m', name: 'M', price: 2000 },
      { id: '16-g', name: 'G', price: 2800 }
    ]
  },
  {
    id: '15',
    name: 'Modelo Fênix',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 100x85cm e 120x85cm',
    imageUrls: ['/Fênix.png'],
    variations: [
      { id: '15-m', name: 'M', price: 2200 },
      { id: '15-g', name: 'G', price: 2800 }
    ]
  },
  {
    id: '18',
    name: 'Cônico Clássico',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 67x51; 71x61; 80x70',
    imageUrls: ['/Conico Classico.jpg'],
    variations: [
      { id: '18-p', name: 'P', price: 800 },
      { id: '18-m', name: 'M', price: 1100 },
      { id: '18-g', name: 'G', price: 1250 }
    ]
  },
  // Row 5
  {
    id: '8',
    name: 'Modelo Bacia',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 45x10cm; 50x20cm; 56x25cm; 68x25cm; 82x25cm',
    imageUrls: ['/Bacias.png'],
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
    description: 'Especificações Técnicas: 60x46cm; 80x56cm',
    variations: [
      { id: '17-m', name: 'M', price: 980 },
      { id: '17-g', name: 'G', price: 1290 }
    ]
  },
  {
    id: '19',
    name: 'Modelo Gota',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 66x70cm e 70x78cm',
    imageUrls: ['/Gota.png'],
    variations: [
      { id: '19-m', name: 'M', price: 1450 },
      { id: '19-g', name: 'G', price: 1980 }
    ]
  },
  {
    id: '20',
    name: 'Modelo Bola',
    category: 'Vasos avulsos',
    description: 'Especificações Técnicas: 60x90cm',
    imageUrls: ['/Bola.jpeg'],
    variations: [
      { id: '20-u', name: 'Único', price: 2340 }
    ]
  },
  // Arranjos
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
    imageUrls: ['/IRIS G (1).jpg', '/IRIS M (2).jpg'],
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
    imageUrls: ['/Petala.png'],
    variations: [
      { id: '23-u', name: 'Único', price: 190 }
    ]
  },
  {
    id: '24',
    name: 'Modelo Cereja com arranjo de orquídeas',
    category: 'Arranjos',
    description: 'Especificações Técnicas: 25x28cm',
    imageUrls: ['/Cereja.jpeg'],
    variations: [
      { id: '24-u', name: 'Único', price: 490 }
    ]
  }
,
  {
    id: '25',
    name: 'Modelo Cônico Slim com Bambu Semi Artificial',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/img_conico_slim_bambu.jpeg'],
    isBestSeller: true,
    variations: [
      { id: '25-p', name: 'P', price: 1920 },
      { id: '25-m', name: 'M', price: 1990 }
    ]
  },
  {
    id: '26',
    name: 'Modelo Cônico Slim com Fícus Lyrata M artificial',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/img_conico_slim_ficus.jpeg'],
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
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/img_conico_slim_japones.jpeg'],
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
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/img_conico_slim_ravenala.jpeg'],
    isBestSeller: true,
    variations: [
      { id: '28-p', name: 'P', price: 2170 },
      { id: '28-m', name: 'M', price: 2240 }
    ]
  },
  {
    id: '29',
    name: 'Modelo Cônico Slim com Bambu Mosso Preservado',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
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
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/Amarilis.png', '/Amarilis (1).png'],
    isBestSeller: true,
    variations: [
      { id: '30-u', name: 'Único', price: 1270 }
    ]
  },
  {
    id: '31',
    name: 'Modelo Amarílis com Strelitzia P',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/Amarilis.png', '/Amarilis (1).png'],
    isBestSeller: true,
    variations: [
      { id: '31-u', name: 'Único', price: 2090 }
    ]
  },
  {
    id: '32',
    name: 'Modelo Amarílis com Strelitzia M',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/Amarilis.png', '/Amarilis (1).png'],
    isBestSeller: true,
    variations: [
      { id: '32-u', name: 'Único', price: 2290 }
    ]
  },
  {
    id: '33',
    name: 'Modelo Elegance com Bambu Japonês Premium M',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
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
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
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
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/Essence.png'],
    isBestSeller: true,
    variations: [
      { id: '35-u', name: 'Único', price: 3570 }
    ]
  },
  {
    id: '36',
    name: 'Modelo Cônico Fit com Palmeira Artificial',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/Cônico Fit.jpg'],
    isBestSeller: true,
    variations: [
      { id: '36-u', name: 'Único', price: 1570 }
    ]
  },
  {
    id: '37',
    name: 'Modelo Cônico Fit com Bambu Semi Artificial',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/Cônico Fit.jpg'],
    isBestSeller: true,
    variations: [
      { id: '37-u', name: 'Único', price: 2130 }
    ]
  },
  {
    id: '38',
    name: 'Modelo Tulipa com Strelitzia P artificial',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/Tulipa.png'],
    isBestSeller: true,
    variations: [
      { id: '38-u', name: 'Único', price: 2370 }
    ]
  },
  {
    id: '39',
    name: 'Modelo Tulipa com Strelitzia M artificial',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/Tulipa.png'],
    isBestSeller: true,
    variations: [
      { id: '39-u', name: 'Único', price: 2570 }
    ]
  },
  {
    id: '40',
    name: 'Modelo Tulipa com Bambu Semi Artificial 3 hastes',
    category: 'Mais vendidos',
    description: `Entrega, montagem e acabamentos incluídos (Para a cidade de Manaus/Am) Enviamos para todo o Brasil.
Até 5x sem juros nos cartões de crédito`,
    imageUrls: ['/Tulipa.png'],
    isBestSeller: true,
    variations: [
      { id: '40-u', name: 'Único', price: 1570 }
    ]
  }

];
