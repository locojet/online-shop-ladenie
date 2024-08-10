import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueScrollTo from 'vue-scrollto';

AOS.init();

const app = createApp(App);

// VueScrollTo konfigurieren
app.use(VueScrollTo, {
  duration: 800,  // Dauer der Scroll-Animation in Millisekunden
  easing: "ease", // Art der Animation
});

app.mount('#app');





  
