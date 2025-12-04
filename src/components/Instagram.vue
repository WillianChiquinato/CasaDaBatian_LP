<template>
  <section id="instagram" class="instagram-section">
    <div class="container">
      <h2 class="section-title">Siga-nos no Instagram</h2>
      <p class="section-subtitle">@casadabatianmercadao</p>

      <div class="carousel-container" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
        <button class="carousel-button prev" @click="prevSlide" aria-label="Anterior">‹</button>

        <div class="carousel-wrapper" ref="wrapper">
          <div class="carousel-track"
            :style="trackStyle">
            <div v-for="(post, idx) in posts" :key="post.id ?? `placeholder-${idx}`" class="instagram-post">
              <a v-if="post.link" :href="post.link" target="_blank" rel="noopener noreferrer" class="post-link">
                <div class="post-image-container">
                  <img v-if="post.image" :src="post.image" :alt="post.alt || 'Instagram post'" class="post-image"
                    loading="lazy" />
                  <div v-else class="placeholder-image">Sem imagem</div>

                  <div class="post-overlay">
                    <div class="post-stats">
                      <span class="stat" v-if="post.likes !== undefined">
                        ❤️ {{ post.likes }}
                      </span>
                      <span class="stat" v-if="post.comments !== undefined">
                        💬 {{ post.comments }}
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              <div v-else class="post-image-container">
                <img :src="post.image || placeholderImage" :alt="post.alt || 'placeholder'" class="post-image"
                  loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-button next" @click="nextSlide" aria-label="Próximo">›</button>
      </div>

      <div class="carousel-dots">
        <button v-for="index in totalSlides" :key="index" class="dot" :class="{ active: currentSlide === index - 1 }"
          @click="goToSlide(index - 1)" :aria-label="`Ir para slide ${index}`"></button>
      </div>

      <a href="https://instagram.com/casadabatianmercadao" target="_blank" rel="noopener noreferrer"
        class="follow-button">
        Seguir @casadabatianmercadao
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { fetchInstaPosts } from '../Services/InstagramService';
import placeholderImage from '../assets/SushiPostInstaPlaceHolder.jpg';

const posts = ref<any[]>([]);
const currentSlide = ref(0);
const transitioning = ref(true);
const autoplayInterval = ref<number | null>(null);
const wrapper = ref<HTMLElement | null>(null);

const getPostsPerSlide = () => {
  if (window.innerWidth >= 1200) return 4;
  if (window.innerWidth >= 992) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const postsPerSlide = ref(getPostsPerSlide());

const totalSlides = computed(() => {
  if (!posts.value.length) return 1;
  return Math.max(1, Math.ceil(posts.value.length / postsPerSlide.value));
});

const trackStyle = computed(() => {
  const wrapperWidth = wrapper.value?.offsetWidth || 0;
  const gap = 24; // 1.5rem = 24px
  const postWidth = (wrapperWidth - (gap * (postsPerSlide.value - 1))) / postsPerSlide.value;
  const offset = currentSlide.value * (postWidth * postsPerSlide.value + gap * postsPerSlide.value);
  
  return {
    transform: `translateX(-${offset}px)`,
    transition: transitioning.value ? 'transform 400ms ease' : 'none'
  };
});

// ----- slide controls -----
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
};

const goToSlide = (index: number) => {
  currentSlide.value = index % totalSlides.value;
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval.value = window.setInterval(() => {
    nextSlide();
  }, 4000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

const onResize = () => {
  postsPerSlide.value = getPostsPerSlide();
  if (currentSlide.value >= totalSlides.value) {
    currentSlide.value = Math.max(0, totalSlides.value - 1);
  }
};

onMounted(async () => {
  try {
    const data = await fetchInstaPosts();
    posts.value = data.data || [];
    console.log(data);
    
  } catch (err) {
    console.error('Erro ao carregar posts do Instagram:', err);
    posts.value = [];
  }

  // configuracoes iniciais
  postsPerSlide.value = getPostsPerSlide();
  window.addEventListener('resize', onResize);
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
  window.removeEventListener('resize', onResize);
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
  width: 100%;
}

.carousel-track {
  display: flex;
  gap: 1.5rem;
}

.instagram-post {
  flex: 0 0 calc((100% - 4.5rem) / 4);
  min-width: calc((100% - 4.5rem) / 4);
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

@media (max-width: 1199px) {
  .instagram-post {
    flex: 0 0 calc((100% - 3rem) / 3);
    min-width: calc((100% - 3rem) / 3);
  }
}

@media (max-width: 991px) {
  .instagram-post {
    flex: 0 0 calc((100% - 1.5rem) / 2);
    min-width: calc((100% - 1.5rem) / 2);
  }
}

@media (max-width: 768px) {
  .instagram-post {
    flex: 0 0 100%;
    min-width: 100%;
  }
  
  .carousel-track {
    gap: 1rem;
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

@media (max-width: 460px) {
  .follow-button {
    padding: 0.8rem 2rem;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }
}
</style>
