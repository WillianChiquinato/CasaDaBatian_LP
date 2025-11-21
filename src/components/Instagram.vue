<template>
  <section id="instagram" class="instagram-section">
    <div class="container">
      <h2 class="section-title">Siga-nos no Instagram</h2>
      <p class="section-subtitle">@casadabatianmercadao</p>
      
      <div class="carousel-container">
        <button class="carousel-button prev" @click="prevSlide" aria-label="Anterior">
          ‹
        </button>
        
        <div class="carousel-wrapper">
          <div 
            class="carousel-track" 
            :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          >
            <div 
              v-for="(post, index) in posts" 
              :key="index" 
              class="instagram-post"
            >
              <a :href="post.link" target="_blank" rel="noopener noreferrer" class="post-link">
                <div class="post-image-container">
                  <img :src="post.image" :alt="post.alt" class="post-image">
                  <div class="post-overlay">
                    <div class="post-stats">
                      <span class="stat">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        {{ post.likes }}
                      </span>
                      <span class="stat">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                        {{ post.comments }}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <button class="carousel-button next" @click="nextSlide" aria-label="Próximo">
          ›
        </button>
      </div>
      
      <div class="carousel-dots">
        <button 
          v-for="(_, index) in totalSlides" 
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
          :aria-label="`Ir para slide ${index + 1}`"
        ></button>
      </div>
      
      <a 
        href="https://instagram.com/casadabatianmercadao" 
        target="_blank" 
        rel="noopener noreferrer"
        class="follow-button"
      >
        Seguir @casadabatianmercadao
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
const slideWidth = ref(100);
let autoplayInterval: number;

const posts = [
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Sushi fresco',
    likes: '2.5k',
    comments: '150',
    link: 'https://instagram.com/p/exemplo1'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Hot Roll especial',
    likes: '3.1k',
    comments: '200',
    link: 'https://instagram.com/p/exemplo2'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Sashimi premium',
    likes: '2.8k',
    comments: '175',
    link: 'https://instagram.com/p/exemplo3'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Combinado especial',
    likes: '4.2k',
    comments: '320',
    link: 'https://instagram.com/p/exemplo4'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Temaki delicioso',
    likes: '1.9k',
    comments: '120',
    link: 'https://instagram.com/p/exemplo5'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Ambiente aconchegante',
    likes: '3.5k',
    comments: '250',
    link: 'https://instagram.com/p/exemplo6'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Ambiente aconchegante',
    likes: '3.5k',
    comments: '250',
    link: 'https://instagram.com/p/exemplo6'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Ambiente aconchegante',
    likes: '3.5k',
    comments: '250',
    link: 'https://instagram.com/p/exemplo6'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Ambiente aconchegante',
    likes: '3.5k',
    comments: '250',
    link: 'https://instagram.com/p/exemplo6'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Ambiente aconchegante',
    likes: '3.5k',
    comments: '250',
    link: 'https://instagram.com/p/exemplo6'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Ambiente aconchegante',
    likes: '3.5k',
    comments: '250',
    link: 'https://instagram.com/p/exemplo6'
  },
  {
    image: '/images/SushiPostInstaPlaceHolder.jpg',
    alt: 'Ambiente aconchegante',
    likes: '3.5k',
    comments: '250',
    link: 'https://instagram.com/p/exemplo6'
  }
];

const totalSlides = computed(() => Math.ceil(posts.length / getPostsPerSlide()));

const getPostsPerSlide = () => {
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 768) return 3;
  return 1;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 4000);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

onMounted(() => {
  startAutoplay();
  window.addEventListener('resize', () => {
    slideWidth.value = 100 / getPostsPerSlide();
  });
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.instagram-section {
  background: #000;
  padding: 6rem 2rem;
  position: relative;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 0.5rem;
  color: #fff;
  text-transform: uppercase;
}

.section-subtitle {
  text-align: center;
  font-size: 1.5rem;
  color: #dc2626;
  margin-bottom: 4rem;
  font-weight: 600;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
}

.carousel-wrapper {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 1.5rem;
}

.instagram-post {
  flex: 0 0 calc(25% - 1.125rem);
  min-width: calc(25% - 1.125rem);
}

.post-link {
  display: block;
  position: relative;
  text-decoration: none;
}

.post-image-container {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: #1a1a1a;
}

.post-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.post-link:hover .post-image {
  transform: scale(1.1);
}

.post-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-link:hover .post-overlay {
  opacity: 1;
}

.post-stats {
  display: flex;
  gap: 2rem;
  color: #fff;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(220, 38, 38, 0.9);
  color: #fff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.carousel-button:hover {
  background: #dc2626;
  transform: translateY(-50%) scale(1.1);
}

.carousel-button.prev {
  left: 3px;
}

.carousel-button.next {
  right: 3px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #333;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: #dc2626;
  transform: scale(1.3);
}

.follow-button {
  display: block;
  width: fit-content;
  margin: 0 auto;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 1px;
  transition: all 0.3s;
  text-transform: uppercase;
}

.follow-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.4);
}

@media (max-width: 1024px) {
  .instagram-post {
    flex: 0 0 calc(33.333% - 1rem);
    min-width: calc(33.333% - 1rem);
  }
}

@media (max-width: 768px) {
  .instagram-post {
    flex: 0 0 100%;
    min-width: 100%;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .carousel-button {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .carousel-button.prev {
    left: 10px;
  }
  
  .carousel-button.next {
    right: 10px;
  }
}
</style>
