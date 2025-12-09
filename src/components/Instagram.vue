<template>
  <section id="instagram" class="instagram-section">
    <div class="container">
      <h2 class="section-title">Siga-nos no Instagram</h2>
      <p class="section-subtitle">@casadabatianmercadao</p>

      <div class="gallery-grid">
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

      <a href="https://instagram.com/casadabatianmercadao" target="_blank" rel="noopener noreferrer"
        class="follow-button">
        Seguir @casadabatianmercadao
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchInstaPosts } from '../Services/InstagramService';
import placeholderImage from '../assets/SushiPostInstaPlaceHolder.jpg';

const posts = ref<any[]>([]);

onMounted(async () => {
  try {
    const data = await fetchInstaPosts();
    posts.value = data.data || [];
    console.log(data);
  } catch (err) {
    console.error('Erro ao carregar posts do Instagram:', err);
    posts.value = [];
  }
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.instagram-post {
  position: relative;
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

@media (max-width: 992px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
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