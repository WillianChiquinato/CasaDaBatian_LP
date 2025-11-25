<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <h1>CASA DA BATIAN</h1>
      </div>
      <nav class="nav">
        <a href="#home">Home</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#localizacao">Localização</a>
        <a href="#pratos">Pratos</a>
        <a href="#instagram">Instagram</a>
        <div class="iconsHeader">
          <a href="https://www.instagram.com/casadabatianmercadao" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://wa.me/5516997689694" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a @click.prevent="toggleModal" href="#" aria-label="Location" style="cursor: pointer;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </a>
        </div>
      </nav>
      <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Menu Mobile -->
    <Transition name="slide-down">
      <nav v-if="isMenuOpen" class="mobile-nav">
        <a href="#home" @click="toggleMenu">Home</a>
        <a href="#cardapio" @click="toggleMenu">Cardápio</a>
        <a href="#localizacao" @click="toggleMenu">Localização</a>
        <a href="#pratos" @click="toggleMenu">Pratos</a>
        <a href="#instagram" @click="toggleMenu">Instagram</a>
        <div class="mobile-icons">
          <a href="https://www.instagram.com/casadabatianmercadao" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://wa.me/5516997689694" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a @click.prevent="toggleModal" href="#" aria-label="Location" style="cursor: pointer;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </a>
        </div>
      </nav>
    </Transition>

    <Transition name="modal">
      <div v-if="showModal" class="modal-overlay" @click="toggleModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="toggleModal">&times;</button>
          <div class="modal-header">
            <div class="modal-icon">📍</div>
            <h3>Encontre-nos</h3>
          </div>
          <div class="modal-body">
            <div class="address-detail">
              <p class="business-name">Casa da Batian Produtos Orientais</p>
              <p class="address-line">Mercado Municipal de Ribeirão Preto</p>
              <p class="address-line">Ribeirão Preto - SP, Brasil</p>
            </div>
            <div class="modal-actions">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Casa+da+Batian+Produtos+Orientais,Ribeirao+Preto"
                target="_blank" rel="noopener noreferrer" class="modal-btn primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Abrir no Google Maps
              </a>
              <a href="https://www.waze.com/ul?ll=-21.173817547010863,-47.81428016831111&navigate=yes&zoom=17"
                target="_blank" rel="noopener noreferrer" class="modal-btn secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
                  <path
                    d="M12 0C8.688 0 6 2.688 6 6c0 1.656.672 3.156 1.758 4.242L12 14.484l4.242-4.242C17.328 9.156 18 7.656 18 6c0-3.312-2.688-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 3.5 12 3.5s2.5 1.12 2.5 2.5S13.38 8.5 12 8.5z" />
                </svg>
                Abrir no Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const showModal = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleModal = () => {
  showModal.value = !showModal.value;
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
  z-index: 10000;
  padding: 1rem 0;
  border-bottom: 2px solid #dc2626;
}

.iconsHeader {
  display: flex;
  gap: 1rem;
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
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;
  z-index: 10001;
}

.menu-toggle span {
  width: 28px;
  height: 3px;
  background: #fff;
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
  background: #dc2626;
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(9px, -9px);
  background: #dc2626;
}

/* Menu Mobile */
.mobile-nav {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(10px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-bottom: 2px solid #dc2626;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.mobile-nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border-left: 3px solid transparent;
}

.mobile-nav a:hover,
.mobile-nav a:active {
  color: #dc2626;
  background: rgba(220, 38, 38, 0.1);
  border-left-color: #dc2626;
  transform: translateX(5px);
}

.mobile-icons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(220, 38, 38, 0.3);
}

.mobile-icons a {
  padding: 0.8rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(220, 38, 38, 0.1);
  transition: all 0.3s ease;
  transform: translateX(0);
}

.mobile-icons a:hover {
  background: #dc2626;
  transform: translateY(-3px) translateX(0);
  box-shadow: 0 5px 15px rgba(220, 38, 38, 0.4);
}

/* Animação do menu mobile */
.slide-down-enter-active {
  animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-leave-active {
  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  padding-top: 40px;
  z-index: 10000;
}

.modal-content {
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  position: relative;
  border: 2px solid #dc2626;
  box-shadow: 0 20px 60px rgba(220, 38, 38, 0.4);
  overflow: hidden;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(220, 38, 38, 0.2);
  border: 1px solid #dc2626;
  color: #dc2626;
  font-size: 28px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  line-height: 1;
  padding: 0;
}

.modal-close:hover {
  background: #dc2626;
  color: #fff;
  transform: rotate(90deg);
}

.modal-header {
  text-align: center;
  padding: 2.5rem 2rem 1.5rem;
  border-bottom: 1px solid rgba(220, 38, 38, 0.3);
}

.modal-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.modal-header h3 {
  color: #dc2626;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
}

.modal-body {
  padding: 2rem;
}

.address-detail {
  background: rgba(220, 38, 38, 0.1);
  border-left: 4px solid #dc2626;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.business-name {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.8rem 0;
}

.address-line {
  color: #d1d1d1;
  margin: 0.4rem 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.modal-btn.primary {
  background: #dc2626;
  color: #fff;
  border-color: #dc2626;
}

.modal-btn.primary:hover {
  background: #b91c1c;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(220, 38, 38, 0.4);
}

.modal-btn.secondary {
  background: transparent;
  color: #dc2626;
  border-color: #dc2626;
}

.modal-btn.secondary:hover {
  background: #dc2626;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(220, 38, 38, 0.3);
}

/* Modal Animations */
.modal-enter-active {
  animation: modalFadeIn 0.4s ease;
}

.modal-leave-active {
  animation: modalFadeOut 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modalFadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.modal-enter-active .modal-content {
  animation: modalSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-leave-active .modal-content {
  animation: modalSlideDown 0.3s ease;
}

@keyframes modalSlideUp {
  from {
    transform: translateY(50px) scale(0.9);
    opacity: 0;
  }

  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes modalSlideDown {
  from {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  to {
    transform: translateY(50px) scale(0.9);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .modal-content {
    max-width: 95%;
    margin: 1.5rem;
  }

  .modal-header {
    padding: 2rem 1.5rem 1rem;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .modal-icon {
    font-size: 3rem;
  }

  .modal-header h3 {
    font-size: 1.5rem;
  }
}
</style>
