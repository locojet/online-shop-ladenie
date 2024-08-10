<template>
  <section id="section-3" class="contact-section bg-secondary">
    <div class="contact-container">
      <h2 class="contact-title">Contacto</h2>
      
      <!-- Kontaktinformationen -->
      <div class="contact-info">
        <div class="info-item">
          <h3 class="info-title">Direccion</h3>
          <p class="info-text">Calle 123, Manizales, Colombia</p>
        </div>
        <div class="info-item">
          <h3 class="info-title">Telefono</h3>
          <p class="info-text">+57 123 456 7890</p>
        </div>
        <div class="info-item">
          <h3 class="info-title">E-Mail</h3>
          <p class="info-text">info@ladenie.com</p>
        </div>
        <div class="info-item">
          <h3 class="info-title">Horario de atención</h3>
          <p class="info-text">Lunes - Viernes: 9:00 am - 6:00 pm</p>
          <p class="info-text">Sabado: 10:00 am - 2:00 pm</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Keine speziellen Daten oder Methoden benötigt
</script>

<style scoped>
.contact-section {
  margin-top: 40rem;
  padding: 2rem 0;
  width: 100vw;
  
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
}

.contact-title {
  color: #ffffff; /* Weißer Text */
  font-size: 2rem;
  font-weight: bold;
  text-align: start;
  margin-bottom: 2rem;
}

.contact-info {
  display: block;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.info-item {
  text-align: start;
  color: #ffffff;
}

.info-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.info-text {
  margin-top: 0.25rem;
}

@media screen and (min-width: 780px) {
  .contact-info {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }

  .contact-section {
    padding: 4rem 0;
    margin-top: -5rem;
  }

  .contact-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
}
</style>
