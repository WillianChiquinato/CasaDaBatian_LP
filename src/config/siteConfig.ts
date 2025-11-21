// Configurações do Site Casa Tabatiam
// Este arquivo centraliza as informações que você pode querer personalizar facilmente

export const siteConfig = {
  // Informações Básicas
  restaurantName: 'CASA TABATIAM',
  tagline: 'Autêntica Culinária Japonesa',
  description: 'Tradição, qualidade e sabor em cada prato.',

  // Contato
  contact: {
    phone: '(51) 3333-3333',
    whatsapp: '5551999999999',
    email: 'contato@casatabatiam.com.br',
    address: {
      street: 'Mercado Público Central',
      city: 'Porto Alegre',
      state: 'RS',
      fullAddress: 'Mercado Público Central, Porto Alegre - RS'
    }
  },

  // Horários de Funcionamento
  hours: {
    weekdays: {
      label: 'Segunda a Sexta',
      lunch: '11:00 - 14:30',
      dinner: '18:00 - 22:30'
    },
    saturday: {
      label: 'Sábados',
      hours: '11:00 - 23:00'
    },
    sunday: {
      label: 'Domingos e Feriados',
      hours: '11:00 - 22:00'
    }
  },

  // Redes Sociais
  social: {
    instagram: 'https://instagram.com/casatabatiam',
    facebook: 'https://facebook.com/casatabatiam',
    instagramHandle: '@casatabatiam'
  },

  // Delivery
  delivery: {
    ifood: '#',
    whatsappOrder: 'https://wa.me/5551999999999'
  },

  // Google Maps
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123!2d-51.2177!3d-30.0368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzEyLjUiUyA1McKwMTMnMDMuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890',

  // Menu Categories
  menuCategories: [
    {
      title: 'Sushi & Sashimi',
      description: 'Peixes frescos preparados pelos nossos mestres sushimen'
    },
    {
      title: 'Hot Rolls',
      description: 'Combinações únicas com toque especial'
    },
    {
      title: 'Pratos Quentes',
      description: 'Yakisoba, Temaki e muito mais'
    },
    {
      title: 'Sobremesas',
      description: 'Doces tradicionais japoneses'
    }
  ],

  // Pratos em Destaque
  featuredDishes: [
    {
      name: 'Sashimi Premium',
      description: 'Seleção especial de peixes frescos cortados pelo nosso sushiman, incluindo salmão, atum e peixe branco',
      price: 'R$ 89,90',
      image: '/images/sashimi.jpg'
    },
    {
      name: 'Hot Roll Especial',
      description: 'Roll empanado recheado com cream cheese, salmão e finalizado com molho especial da casa',
      price: 'R$ 45,90',
      image: '/images/hot-roll.jpg'
    },
    {
      name: 'Combinado Casa Tabatiam',
      description: '30 peças variadas incluindo sushis, sashimis e hot rolls. Perfeito para compartilhar',
      price: 'R$ 149,90',
      image: '/images/combinado.jpg'
    },
    {
      name: 'Temaki Salmão',
      description: 'Cone de alga nori recheado com arroz, salmão fresco, cream cheese e cebolinha',
      price: 'R$ 28,90',
      image: '/images/temaki.jpg'
    },
    {
      name: 'Yakisoba Tradicional',
      description: 'Macarrão oriental salteado com legumes frescos e proteína à sua escolha',
      price: 'R$ 42,90',
      image: '/images/yakisoba.jpg'
    },
    {
      name: 'Uramaki Filadélfia',
      description: 'Sushi invertido com salmão, cream cheese e gergelim tostado por fora',
      price: 'R$ 38,90',
      image: '/images/uramaki.jpg'
    },
    {
      name: 'Nigiri Selection',
      description: 'Seleção de 10 nigiris com os melhores peixes do dia sobre arroz temperado',
      price: 'R$ 65,90',
      image: '/images/nigiri.jpg'
    },
    {
      name: 'Gunkan Especial',
      description: 'Navio de arroz envolto em alga nori com recheio de salmão picante',
      price: 'R$ 32,90',
      image: '/images/gunkan.jpg'
    }
  ],

  // Posts do Instagram (você pode atualizar com URLs reais dos posts)
  instagramPosts: [
    {
      image: '/images/insta1.jpg',
      alt: 'Sushi fresco',
      likes: '2.5k',
      comments: '150',
      link: 'https://instagram.com/p/exemplo1'
    },
    {
      image: '/images/insta2.jpg',
      alt: 'Hot Roll especial',
      likes: '3.1k',
      comments: '200',
      link: 'https://instagram.com/p/exemplo2'
    },
    {
      image: '/images/insta3.jpg',
      alt: 'Sashimi premium',
      likes: '2.8k',
      comments: '175',
      link: 'https://instagram.com/p/exemplo3'
    },
    {
      image: '/images/insta4.jpg',
      alt: 'Combinado especial',
      likes: '4.2k',
      comments: '320',
      link: 'https://instagram.com/p/exemplo4'
    },
    {
      image: '/images/insta5.jpg',
      alt: 'Temaki delicioso',
      likes: '1.9k',
      comments: '120',
      link: 'https://instagram.com/p/exemplo5'
    },
    {
      image: '/images/insta6.jpg',
      alt: 'Ambiente aconchegante',
      likes: '3.5k',
      comments: '250',
      link: 'https://instagram.com/p/exemplo6'
    }
  ]
};
