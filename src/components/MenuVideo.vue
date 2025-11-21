<template>
  <section id="cardapio" class="menu-video-section">
    <video autoplay muted loop playsinline class="menu-bg-video">
      <source src="/videos/PlaceHolderVideoIntro.mp4" type="video/mp4">
    </video>
    <div class="menu-overlay"></div>
    <div class="menu-content">
      <h2 class="section-title">Nosso Cardápio</h2>
      <p class="section-description">
        Experimente o melhor da culinária japonesa com ingredientes frescos e receitas autênticas
      </p>
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
          <h3>Sobremesas</h3>
          <p>Doces tradicionais japoneses</p>
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

.menu-bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 1;
  object-fit: cover;
}

.menu-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2;
}

.menu-content {
  position: relative;
  z-index: 3;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
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
  font-size: 1.2rem;
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
