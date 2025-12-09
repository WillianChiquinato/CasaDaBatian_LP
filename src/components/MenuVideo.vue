<template>
  <section id="intro" class="menu-video-section">
    <div class="menu-content">
      <h2 class="section-title">A mais de 50 anos nos Mercadão de Ribeirão Preto</h2>
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
    </div>
  </section>
</template>

<style scoped>
.menu-video-section {
  background: #0a0a0a;
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
  margin: 0 auto;
}

.menu-content {
  position: relative;
  width: 100%;
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
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  color: #dc2626;
  text-transform: uppercase;
  line-height: 1.2;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.section-description {
  font-size: 1rem;
  margin-bottom: 4rem;
  color: #e5e5e5;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .section-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
    letter-spacing: 0.5px;
  }
}
</style>
