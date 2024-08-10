<template>
    <footer class="footer-section">
      <div class="footer-container">
        <div class="footer-grid">
          <!-- Aviso Legal -->
          <div class="footer-item">
            <h3 class="footer-title">Aviso Legal</h3>
            <p class="footer-text">
              Nombre de la empresa: Ladenie S.A.S.<br />
              Dirección: Calle 123, Manizales, Colombia<br />
              Representante legal: Alejandra Mejia Carmona<br />
              Registro mercantil: NIT 123456789
            </p>
          </div>
  
          <!-- Política de privacidad -->
          <div class="footer-item">
            <h3 class="footer-title">Política de Privacidad</h3>
            <p class="footer-text">
              Encuentra información sobre nuestra política de privacidad en nuestra <a href="/privacidad" class="footer-link">Política de Privacidad</a>.
            </p>
          </div>
  
          <!-- Contacto -->
          <div class="footer-item">
            <h3 class="footer-title">Contacto</h3>
            <p class="footer-text">
              Correo electrónico: <a href="mailto:info@ladenie.com" class="footer-link">info@ladenie.com</a><br />
              Teléfono: <a href="tel:+571234567890" class="footer-link">+57 123 456 7890</a>
            </p>
          </div>
  
          <!-- Avisos legales -->
          <div class="footer-item">
            <h3 class="footer-title">Avisos Legales</h3>
            <p class="footer-text">
              Todos los contenidos de este sitio web están protegidos por derechos de autor. La reproducción o distribución sin autorización está prohibida.
            </p>
          </div>
        </div>
  
        <!-- Redes Sociales -->
        <div class="social-icons">
          <a href="https://www.instagram.com/tu_cuenta" class="social-link" aria-label="Instagram">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="https://www.tiktok.com/@tu_cuenta" class="social-link" aria-label="TikTok">
            <font-awesome-icon :icon="['fab', 'tiktok']" />
          </a>
        </div>
  
        <!-- Derechos de autor -->
        <div class="footer-bottom">
          <p class="footer-copy">© 2024 Ladenie S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // No se requieren datos o métodos especiales
  </script>
  
  <style scoped>
  .footer-section {
    background-color: #ffffff; /* Fondo oscuro */
    color: #000000; /* Texto blanco */
    padding: 3rem 0;
    width: 100vw;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .footer-item {
    text-align: left;
  }
  
  .footer-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .footer-text {
    font-size: 1rem;
    line-height: 1.75;
    margin-bottom: 1rem;
  }
  
  .footer-link {
    color: #3b82f6; /* Color secundario */
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-link:hover {
    color: #1e3a8a; /* Azul más oscuro al pasar el cursor */
  }
  
  .social-icons {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .social-link {
    color: #ffffff;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .social-link:hover {
    color: #3b82f6;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
  }
  
  .footer-copy {
    font-size: 0.875rem;
    color: #9ca3af; /* Texto gris claro */
  }
  </style>
  