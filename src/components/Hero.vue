<template>
  <section id="home" class="hero">
    <video autoplay muted loop playsinline class="hero-video">
      <source src="/videos/PlaceHolderVideoIntro.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="logo-container">
        <img src="../assets/images/Logo_Full_Escrito_Vermelho.png" alt="Casa da Batian Logo" class="hero-logo">
        <p class="hero-subtitle">Autêntica Produtos e Culinária Japonesa</p>
      </div>
      <button class="cta-button" @click="scrollToMenu">Ver Exclusividades</button>
    </div>
    <div class="scroll-indicator">
      <span></span>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToMenu = () => {
  document.getElementById('pratos')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-video {
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

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.8)
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 1rem;
  z-index: 100;
  height: 100%;
}


.logo-container {
  animation: fadeInUp 1s ease-out;
}

.hero-logo {
  display: block;
  margin: 0 auto;
  width: 35%;
  height: auto;
  object-fit: contain;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 20px rgba(220, 38, 38, 0.5));
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  color: #dc2626;
}

.hero-subtitle {
  font-size: 1.5rem;
  letter-spacing: 4px;
  margin-bottom: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
}

.cta-button {
  background: #dc2626;
  color: #fff;
  border: 2px solid #dc2626;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
}

.cta-button:hover {
  background: transparent;
  border-color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.scroll-indicator span {
  display: block;
  width: 20px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 20px;
  position: relative;
}

.scroll-indicator span::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  width: 4px;
  height: 8px;
  background: #dc2626;
  border-radius: 2px;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(15px);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    letter-spacing: 4px;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    letter-spacing: 2px;
  }
  
  .hero-logo {
    width: 250px;
    height: 250px;
  }
}
</style>
