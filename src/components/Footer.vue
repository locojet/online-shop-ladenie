<template>
    <footer id="section-4" class="footer-section">
      <div class="footer-container">
        <div class="faq-list">
          <!-- FAQ Item 1 -->
          <div class="faq-item">
            <h3 class="faq-question" @click="toggle(1)">Aviso Legal</h3>
            <div v-if="active === 1" class="faq-answer">
              <p>Nombre de la empresa: Ladenie S.A.S.<br />
                Dirección: Calle 123, Manizales, Colombia<br />
                Representante legal: Alejandra Mejia Carmona<br />
                Registro mercantil: NIT 123456789</p>
                <p>Todo el contenido de este sitio está protegido por derechos de autor. Queda prohibida la reproducción sin autorización.</p>
                
            </div>
            <hr>
          </div>

          
  
          <!-- FAQ Item 2 -->
          <div class="faq-item">
            <h3 class="faq-question" @click="toggle(2)">Política de Privacidad</h3>
            <div v-if="active === 2" class="faq-answer">
              <p>Consulta nuestra <a href="/privacidad" class="footer-link">Política de Privacidad</a> para obtener más detalles.</p>
            </div>
            <hr>
          </div>
          
  
          <!-- FAQ Item 3 -->
          <div class="faq-item">
            <h3 class="faq-question" @click="toggle(3)">Como contactar Ladenie?</h3>
            <div v-if="active === 3" class="faq-answer">
              <p>Correo electrónico: <a href="mailto:info@ladenie.com" class="footer-link">info@ladenie.com</a><br />
                Teléfono: <a href="tel:+571234567890" class="footer-link">+57 123 456 7890</a></p>
            </div>
            <hr>
          </div>

          
  
          
          
        </div>
  
        <!-- Redes Sociales -->
        <div class="social-icons">
          <a target="_blank" href="https://www.instagram.com/ladenieoficial" class="social-link" aria-label="Instagram">
            <img src="../assets/Instagramicon.png" alt="">
          </a>
          <a target="_blank" href="https://www.tiktok.com/@alenintips?_t=8omB1tLfpE8&_r=1" class="social-link" aria-label="TikTok">
            <img src="../assets/tiktokicon.png" alt="">
          </a>
        </div>
  
        <!-- Derechos de Autor -->
        <div class="footer-bottom">
          <p class="footer-copy">© 2024 Ladenie S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Active FAQ item
  const active = ref(null);
  
  // Toggle function for FAQ items
  function toggle(index) {
    active.value = active.value === index ? null : index;
  }
  </script>
  
  <style scoped>
  .footer-section {
    background-color: #1e1e1e;
    color: #f4f4f5;
    padding: 3rem 1.5rem;
    width: 100%;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .faq-list {
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .faq-item {
    margin-bottom: 1rem;
    cursor: pointer;
  }
  
  .faq-question {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: #e5e7eb;
    transition: color 0.3s ease;
  }
  
  .faq-question:hover {
    color: #3b82f6;
  }
  
  .faq-answer {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #d1d5db;
    margin-left: 1rem;
  }
  
  .footer-link {
    color: #3b82f6;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-link:hover {
    color: #2563eb;
  }
  
  .social-icons {
    display: flex;
    gap: 1.25rem;
    margin-bottom: -3rem;
    
    width: 80px;
    height: 80px;
  }
  
  .social-link {
    color: #f4f4f5;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .social-link:hover {
    color: #3b82f6;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 1.5rem;
  }
  
  .footer-copy {
    font-size: 0.875rem;
    color: #9ca3af;
  }
  </style>
  