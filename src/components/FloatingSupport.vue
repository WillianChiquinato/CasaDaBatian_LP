<template>
  <!-- Botão de Chat -->
  <Teleport to="body">
    <transition name="bounce">
      <div 
        class="floating-btn chat" 
        @click="open = !open"
        :class="{ active: open }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="ripple"></span>
      </div>
    </transition>

    <!-- Botão WhatsApp -->
    <transition name="bounce">
      <div class="floating-btn whatsapp" @click="openWhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span class="ripple"></span>
      </div>
    </transition>

    <!-- Chat Box -->
    <transition name="slide-fade">
      <div class="chat-box" v-if="open">
        <div class="chat-header">
          <h3>👋 Como posso ajudar?</h3>
          <button class="close-btn" @click="open = false">✕</button>
        </div>

        <div class="chat-content">
          <transition name="fade" mode="out-in">
            <div v-if="!selected" key="menu" class="menu-options">
              <button class="option-btn" @click="select('sobre')">
                <span class="icon">ℹ️</span>
                <span class="text">Sobre Nós</span>
              </button>
              <button class="option-btn" @click="select('contato')">
                <span class="icon">📞</span>
                <span class="text">Contato</span>
              </button>
              <button class="option-btn" @click="select('horarios')">
                <span class="icon">🕐</span>
                <span class="text">Horários</span>
              </button>
              <button class="option-btn" @click="select('endereco')">
                <span class="icon">📍</span>
                <span class="text">Endereço</span>
              </button>
            </div>

            <div v-else key="message" class="message-content">
              <p>{{ messages[selected] }}</p>
              <button class="back-btn" @click="selected = ''">
                <span>← Voltar ao menu</span>
              </button>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const open = ref(false);
const selected = ref<"sobre" | "contato" | "horarios" | "endereco" | "">("");

const messages = reactive({
  sobre: "Somos um restaurante especializado em comida oriental.",
  contato: "Telefone: (51) 99999-9999\nEmail: contato@restaurante.com",
  horarios: "Seg a Sab: 18h às 23h.",
  endereco: "Rua Exemplo, 123 - Centro.",
});

function select(option: "sobre" | "contato" | "horarios" | "endereco") {
  selected.value = option;
}

function openWhatsApp() {
  window.open("https://wa.me/5551999999999", "_blank");
}
</script>

<style scoped>
.floating-btn {
  position: fixed !important;
  right: 30px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  color: white;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15),
              0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999999;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.floating-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: transform 0.5s ease;
}

.floating-btn:hover::before {
  transform: translate(-50%, -50%) scale(1.5);
}

.floating-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2),
              0 6px 12px rgba(0, 0, 0, 0.15);
}

.floating-btn:active {
  transform: translateY(-2px) scale(1.02);
}

.floating-btn.chat {
  bottom: 30px;
  background: linear-gradient(135deg, #ff0044 0%, #ff3366 100%);
}

.floating-btn.chat.active {
  background: linear-gradient(135deg, #cc0036 0%, #dd2255 100%);
  transform: rotate(90deg);
}

.floating-btn.whatsapp {
  bottom: 110px;
  background: linear-gradient(135deg, #25D366 0%, #20bd5a 100%);
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  animation: ripple-effect 2s infinite;
  pointer-events: none;
}

@keyframes ripple-effect {
  0% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

/* Chat Box com Glassmorphism */
.chat-box {
  position: fixed !important;
  bottom: 110px;
  right: 30px;
  width: 340px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12),
              0 8px 16px rgba(0, 0, 0, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
  z-index: 999999;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(135deg, #ff0044 0%, #ff3366 100%);
  color: white;
  position: relative;
}

.chat-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.close-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.2s ease;
  font-weight: 300;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.chat-content {
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
}

/* Menu de Opções */
.menu-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-btn {
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.option-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 0, 68, 0.1), transparent);
  transition: left 0.5s ease;
}

.option-btn:hover::before {
  left: 100%;
}

.option-btn:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(255, 0, 68, 0.15);
  background: linear-gradient(135deg, #fff5f7 0%, #ffffff 100%);
}

.option-btn .icon {
  font-size: 22px;
  flex-shrink: 0;
}

.option-btn .text {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  text-align: left;
}

/* Conteúdo da Mensagem */
.message-content {
  animation: fadeIn 0.3s ease;
}

.message-content p {
  margin: 0 0 20px 0;
  padding: 16px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 12px;
  line-height: 1.6;
  color: #333;
  border-left: 4px solid #ff0044;
  white-space: pre-line;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.back-btn {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #ff0044 0%, #ff3366 100%);
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 0, 68, 0.25);
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 0, 68, 0.35);
  background: linear-gradient(135deg, #cc0036 0%, #dd2255 100%);
}

.back-btn:active {
  transform: translateY(0);
}

/* Animações */
.bounce-enter-active {
  animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes bounce-in {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

.slide-fade-enter-active {
  animation: slide-fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  animation: slide-fade-out 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slide-fade-in {
  0% {
    transform: translateY(20px) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes slide-fade-out {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(20px) scale(0.9);
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scrollbar customizada */
.chat-content::-webkit-scrollbar {
  width: 6px;
}

.chat-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.chat-content::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ff0044 0%, #ff3366 100%);
  border-radius: 10px;
}

.chat-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #cc0036 0%, #dd2255 100%);
}

/* Responsivo */
@media (max-width: 480px) {
  .floating-btn {
    right: 20px;
    width: 56px;
    height: 56px;
  }

  .chat-box {
    right: 20px;
    width: calc(100vw - 40px);
    max-width: 340px;
  }
}
</style>
