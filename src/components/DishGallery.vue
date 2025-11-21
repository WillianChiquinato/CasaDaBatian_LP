<template>
  <section id="pratos" class="dish-gallery">
    <div class="container">
      <h2 class="section-title">Pratos Exclusivos</h2>
      <p class="section-subtitle">Conheça nossas especialidades</p>
      
      <div class="gallery-grid">
        <div 
          v-for="(dish, index) in dishes" 
          :key="index" 
          class="dish-card"
          @mouseenter="hoveredCard = index"
          @mouseleave="hoveredCard = null"
        >
          <div class="dish-image-container">
            <img :src="dish.image" :alt="dish.name" class="dish-image">
            <div class="dish-overlay"></div>
          </div>
          <div class="dish-info">
            <h3 class="dish-name">{{ dish.name }}</h3>
            <p class="dish-description">{{ dish.description }}</p>
            <div class="dish-footer">
              <span class="dish-price">{{ dish.price }}</span>
              <button class="order-button">Pedir Agora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const hoveredCard = ref<number | null>(null);

const dishes = [
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
];
</script>

<style scoped>
.dish-gallery {
  background: #0a0a0a;
  padding: 6rem 2rem;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 1rem;
  color: #dc2626;
  text-transform: uppercase;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #a0a0a0;
  margin-bottom: 4rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.dish-card {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  border: 1px solid transparent;
}

.dish-card:hover {
  transform: translateY(-10px);
  border-color: #dc2626;
  box-shadow: 0 20px 40px rgba(220, 38, 38, 0.2);
}

.dish-image-container {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.dish-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.dish-card:hover .dish-image {
  transform: scale(1.1);
}

.dish-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
}

.dish-info {
  padding: 2rem;
  color: #fff;
}

.dish-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
}

.dish-description {
  font-size: 0.95rem;
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  min-height: 60px;
}

.dish-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #333;
}

.dish-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #dc2626;
}

.order-button {
  background: #dc2626;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.order-button:hover {
  background: #b91c1c;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
