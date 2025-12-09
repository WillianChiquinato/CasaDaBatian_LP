<template>
  <section id="cardapio" class="dish-gallery">
    <div class="container">
      <h2 class="section-title">Cardápio</h2>
      <p class="section-subtitle">Conheça nossas especialidades</p>
      <a :href="ImagemCardapioUrl" target="_blank" rel="noopener noreferrer"
        class="ticket-button">
        Conferir Cardápio Completo
      </a>

      <div class="gallery-grid">
        <div v-for="(dish, index) in dishes" :key="index" class="dish-card" @mouseenter="hoveredCard = index"
          @mouseleave="hoveredCard = null">
          <div class="dish-image-container">
            <img :src="dish.image" :alt="dish.name" class="dish-image">
            <div class="dish-overlay"></div>
          </div>
          <div class="dish-info">
            <h3 class="dish-name">{{ dish.name }}</h3>
            <p class="dish-description">{{ dish.description }}</p>
            <p class="dish-type">Tipo: {{ dish.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import yakisoba from '../assets/images/Yakisoba.png'
import uramakiFiladelfia from '../assets/images/UramakiFiladelfia.png'
import uramaki from '../assets/images/Uramaki.png'
import temaki from '../assets/images/Temaki.png'
import salada from '../assets/images/Salada.png'
import oniguiri from '../assets/images/Oniguiri.png'
import inariSushi from '../assets/images/InariSushi.png'
import hotRoll from '../assets/images/HotRoll.png'
import hossoMaki from '../assets/images/HossomakideSalmao.png'
import futomaki from '../assets/images/Futomaki.png'
import comboCompleto from '../assets/images/ComboCompleto.png'

import ImagemCardapio from '../assets/images/CardapioPng.png';
const ImagemCardapioUrl = ImagemCardapio;

const hoveredCard = ref<number | null>(null);

const dishes = [
  {
    name: 'Yakisoba Tradicional',
    description: 'Macarrão oriental salteado com legumes frescos e proteína à sua escolha',
    type: 'Combo',
    image: yakisoba
  },
  {
    name: 'Uramaki Filadélfia',
    description: 'Sushi invertido com salmão, cream cheese e gergelim tostado por fora',
    type: 'Sushi',
    image: uramakiFiladelfia
  },
  {
    name: 'Uramaki Califórnia',
    description: 'Sushi invertido com kani, abacate e pepino, coberto com gergelim',
    type: 'Sushi',
    image: uramaki
  },
  {
    name: 'Temaki Salmão',
    description: 'Cone de alga nori recheado com arroz, salmão fresco, cream cheese e cebolinha',
    type: 'Sushi',
    image: temaki
  },
  {
    name: 'Salada Sunomono',
    description: 'Salada refrescante de pepino com molho agridoce e gergelim',
    type: 'Salada',
    image: salada
  },
  {
    name: 'Oniguiri Variados',
    description: 'Bolinhos de arroz recheados com atum, salmão ou umeboshi',
    type: 'Sushi',
    image: oniguiri
  },
  {
    name: 'Inari Sushi',
    description: 'Bolinho de arroz envolto em tofu frito adocicado',
    type: 'Sushi',
    image: inariSushi
  },
  {
    name: 'Hot Roll Especial',
    description: 'Sushi frito recheado com salmão, cream cheese e cebolinha, servido com molho especial',
    type: 'Sushi',
    image: hotRoll
  },
  {
    name: 'Hosso Maki de Salmão',
    description: 'Sushi tradicional com alga nori, arroz e salmão fresco',
    type: 'Sushi',
    image: hossoMaki
  },
  {
    name: 'Futomaki Vegano',
    description: 'Sushi grosso recheado com legumes variados e abacate',
    type: 'Sushi',
    image: futomaki
  },
  {
    name: 'Combo Completo',
    description: 'Combinado com variedade de sushis e Rolls para duas pessoas',
    type: 'Combo',
    image: comboCompleto
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
  border: 0.7px solid #420b0b;
}

.dish-card:hover {
  transform: translateY(-10px);
  border: 1.5px solid #dc2626;
  box-shadow: 0 20px 40px rgba(220, 38, 38, 0.2);
}

.dish-image-container {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: radial-gradient(circle at 30% 50%, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%);
  background-size: 150% 150%;
  animation: subtle-shift 8s ease-in-out infinite;
}

.dish-image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.2) 0%, transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 40%);
  z-index: 0;
}

.dish-image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(1.1) contrast(1.15) saturate(1.2) drop-shadow(0 8px 16px rgba(0,0,0,0.4));
  transition: transform 0.5s;
  z-index: 1;
  padding: 1rem;
}

@keyframes subtle-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
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

.dish-type {
  font-size: 1.2rem;
  color: #888;
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

.ticket-button {
  display: block;
  width: fit-content;
  margin: 0 auto;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: #fff;
  padding: 0.7rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 1px;
  transition: all 0.3s;
  text-transform: uppercase;
  margin-top: 1.1rem;
  margin-bottom: 3rem;
}

.ticket-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.4);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .dish-price {
    font-size: 1.2rem;
  }

  .order-button {
    padding: 0.7rem 1rem;
    border-radius: 6px;
    font-size: 0.7rem;
  }
}
</style>
