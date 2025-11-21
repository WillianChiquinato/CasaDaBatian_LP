<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <h1>CASA DA BATIAN</h1>
      </div>
      <nav class="nav">
        <a href="#home">Home</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#pratos">Pratos</a>
        <a href="#instagram">Instagram</a>
        <a href="#localizacao">Localização</a>
        <a href="#contato">Contato</a>
      </nav>
      <button class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 2px solid #dc2626;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  color: #dc2626;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav a:hover {
  color: #dc2626;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-toggle span {
  width: 25px;
  height: 2px;
  background: #fff;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .menu-toggle {
    display: flex;
  }
}
</style>
