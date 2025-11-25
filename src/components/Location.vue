<template>
  <section id="localizacao" class="location-section">
    <div class="container">
      <h2 class="section-title">Localização</h2>
      <p class="section-subtitle">Venha nos visitar no Mercado Público</p>

      <div class="location-content">
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1539.3629055828897!2d-47.81428016831111!3d-21.173817547010863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bef82bd4eea9%3A0x66b38a147f0cdcfb!2sCasa%20da%20Batian%20Produtos%20Orientais!5e0!3m2!1spt-BR!2sbr!4v1763735336294!5m2!1spt-BR!2sbr"
            width="100%" height="600" style="border:0;" allowfullscreen loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="location-info">
          <div class="info-card">
            <div class="icon">📍</div>
            <h3>Endereço</h3>
            <p>Casa da Batian Produtos Orientais</p>
            <p>Ribeirão Preto - SP</p>
          </div>

          <div class="info-card">
            <div class="icon">📞</div>
            <h3>Telefone</h3>
            <p><strong>Pedidos:</strong> (16)3610-9694</p>
            <p><strong>WhatsApp:</strong> (16) 99768-9694</p>
          </div>
        </div>
        <div class="info-card">
          <div class="icon">🕐</div>
          <h3>Horário de Funcionamento</h3>
          <div class="hours">
            <div class="divideHours">
              <p><strong>Segunda a Sexta:</strong></p>
              <p>07:00 - 18:00</p>
              <p><strong>Sábados:</strong></p>
              <p>07:00 - 16:00</p>
            </div>
            <div class="divideHours">
              <p><strong>Domingos e Feriados:</strong></p>
              <p>Fechado</p>
            </div>
          </div>
        </div>

        <div class="info-card">
          <div class="icon">🍱</div>
          <h3>Receitas</h3>
          <p>Venha conhecer nossas receitas!</p>
          <div class="delivery-buttons">
            <a href="#" class="delivery-btn conhecer-receitas">Conhecer Receitas</a>
            <a href="#" class="delivery-btn whatsapp">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-section {
  background: #0a0a0a;
  padding: 6rem 2rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 1rem;
  color: #dc2626;
  text-transform: uppercase;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #a0a0a0;
  margin-bottom: 4rem;
}

.location-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: start;
}

.map-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(220, 38, 38, 0.2);
  border: 2px solid #dc2626;
}

.map-container iframe {
  display: block;
  width: 100%;
  height: 500px;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.info-card {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s;
}

.info-card:hover {
  border-color: #dc2626;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.2);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  color: #dc2626;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.info-card p {
  color: #d1d1d1;
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

.hours {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.hours p {
  margin-bottom: 0.3rem;
}

.hours strong {
  color: #fff;
}

.delivery-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 3.5rem;
}

.delivery-btn {
  flex: 1;
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.delivery-btn.conhecer-receitas {
  background: #ea1d2c;
  color: #fff;
}

.delivery-btn.conhecer-receitas:hover {
  background: #c91828;
  transform: translateY(-2px);
}

.delivery-btn.whatsapp {
  background: #25d366;
  color: #fff;
}

.delivery-btn.whatsapp:hover {
  background: #1fb855;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .location-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    letter-spacing: 1px;
  }

  .map-container iframe {
    height: 350px;
  }

  .delivery-buttons {
    flex-direction: column;
  }
}
</style>
