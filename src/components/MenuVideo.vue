<template>
  <section id="cardapio" class="menu-video-section">
    <div class="menu-overlay"></div>
    <div class="menu-content">
      <h2 class="section-title">Nosso Cardápio</h2>
      <p class="section-description">
        Experimente o melhor da culinária japonesa com ingredientes frescos e receitas autênticas
      </p>
      <div class="video">
        <video 
          class="menu-video" 
          autoplay 
          muted 
          loop 
          playsinline
          controls
        >
          <source src="/videos/PlaceHolderVideoIntro.mp4" type="video/mp4">
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
      <div class="menu-categories">
        <div class="category-card">
          <h3>Sushi & Sashimi</h3>
          <p>Peixes frescos preparados pelos nossos mestres sushimen</p>
        </div>
        <div class="category-card">
          <h3>Hot Rolls</h3>
          <p>Combinações únicas com toque especial</p>
        </div>
        <div class="category-card">
          <h3>Pratos Quentes</h3>
          <p>Yakisoba, Temaki e muito mais</p>
        </div>
        <div class="category-card">
          <h3>Especiarias</h3>
          <p>Molhos, temperos e acompanhamentos tradicionais</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-video-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 6rem 2rem;
}

.video {
  width: 100%;
  max-width: 800px;
  overflow: hidden;
}

.menu-content {
  position: relative;
  z-index: 3;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.menu-video {
  width: 100%;
  border-radius: 7px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 0.6px solid #dc2626;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 1.5rem;
  color: #dc2626;
  text-transform: uppercase;
}

.section-description {
  font-size: 1rem;
  margin-bottom: 4rem;
  color: #e5e5e5;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.menu-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.category-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(220, 38, 38, 0.3);
  padding: 2.5rem 2rem;
  border-radius: 8px;
  transition: all 0.3s;
}

.category-card:hover {
  background: rgba(220, 38, 38, 0.1);
  border-color: #dc2626;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
}

.category-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #dc2626;
  font-weight: 600;
}

.category-card p {
  font-size: 1rem;
  color: #d1d1d1;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .menu-categories {
    grid-template-columns: 1fr;
  }
}
</style>
