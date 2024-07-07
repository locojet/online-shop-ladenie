<template>
  <div class="container absolute">
      <div class="card">
          <div class="img-container">
              <div class="img"><img src="../assets/gluteo.png" alt="Gluteo"></div>
          </div>
          
          <div class="content text-secondary2">
            <div class="topograf">
              <h3 ><a class="link-product" href="#">Gluteonin</a></h3>
              <p class="description">
                 80.000 pesos
              </p>
            </div>
              <div class="button-compras">
            <button class="action-btn meter-a-la-bolsa-de-compras-boton "><img  class="img-compras" src="../assets/compras.svg" alt=""></button>
          </div>
              
          </div>
      </div>


      

      <div class="card">
          <div class="img-container">
              <div class="img"><img src="../assets/acond.png" alt="Gluteo"></div>
          </div>
          
          <div class="content  ">
            <div class="topograf">
              <h3 ><a class="link-product" href="#">Acondicionador</a></h3>
              <p class="description">
                 80.000 pesos
              </p>
            </div>
              <div class="button-compras">
            <button class="action-btn meter-a-la-bolsa-de-compras-boton "><img  class="img-compras" src="../assets/compras.svg" alt=""></button>
          </div>
              
          </div>
      </div>




      <div class="card">
          <div class="img-container">
              <div class="img"><img src="../assets/acond.png" alt="Gluteo"></div>
          </div>
          
          <div class="content ">
            <div class="topograf">
              <h3 ><a class="link-product" href="#">Shampoo</a></h3>
              <p class="description">
                 80.000 pesos
              </p>
            </div>
              <div class="button-compras">
            <button class="action-btn meter-a-la-bolsa-de-compras-boton "><img  class="img-compras" src="../assets/compras.svg" alt=""></button>
          </div>
              
          </div>
      </div>




       <div class="card">
          <div class="img-container">
              <div class="img"><img src="../assets/acond.png" alt="Gluteo"></div>
          </div>
          
          <div class="content">
            <div class="topograf">
              <h3><a class="link-product" href="#">Combo</a></h3>
              <p class="description">
                 40.000 pesos
              </p>
            </div>
              <div class="button-compras">
            <button class="action-btn meter-a-la-bolsa-de-compras-boton"><img src="../assets/compras.svg" alt=""></button>
          </div>
              
          </div>




          
      </div>


      
  </div>

  
</template>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 100%;
  z-index: 10;
  overflow-x: hidden;
}

.card {
  width: 300px; /* Beibehalten der festen Breite für die Karten */
  min-height: 550px;
  position: relative;
  overflow: hidden;
  
  
}

.card{
  margin:3rem 3rem 0 3rem;
  
  
}

.card:nth-child(4){
  margin-top: -6rem;
}

.img-container {
  width: 80%;
  margin: 0 auto;
  height: 50%;
}

.img img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 25px;
  transition: transform 0.1s ease-in-out;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.4));
  
}

.content {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  padding: 20px;
  margin: 10px;
  margin-left: 1px;
  max-height: 50%;
  overflow-y: auto;
  background: rgba(244, 131, 174, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(6px);
  border-radius: 10px;
  margin-top: 0;
  color: #fff;
  
  
}

.content {
    opacity: 0;
    transition: opacity 2s ease-out;
    
}



.content.visible {
    opacity: 1;
}

.topograf {
  text-align: left;
  flex-grow: 1;
  
  
  
}

.button-compras {
  display: flex;
  justify-content: end;
}

.meter-a-la-bolsa-de-compras-boton {
  width: 45px;
  height: 45px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.img img:hover {
  transform: scale(1.02);
}

.link-product {
  
  text-decoration: underline;
}

.link-product:hover {
  text-decoration: underline;
  transform: scale(1.02);

}


@media (max-width: 1187px) {
.card:nth-child(3){
  margin-top: -6.1rem;
}
  
}
@media (max-width: 780px) {
  .container {
    flex-direction: column;
    margin-top: 0rem;
    
  }

  .card {
    width: 20rem; /* Volle Breite der Karte auf kleineren Bildschirmen */
    margin: 0 auto 2rem;
    margin-top: -2rem;
  }

  .content {
    position: static;
    margin-top: -1rem;
    max-width: 80%;
    margin: 0 auto;
  }

  .button-compras, .topograf {
    width: 100%;
    text-align: center;
  }

  .img-container {
    width: 100%; /* Anpassung der Bildcontainer-Breite auf kleineren Bildschirmen */
    transform: scale(1.3);
    margin-top: 6rem;
    margin-bottom: 1.2rem;
  
  }

  .card:nth-child(4){
  margin-top: -2rem;
}





  
}
</style>

<script setup>
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        root: null, // nutzt den Viewport als Wurzel
        rootMargin: '0px',
        threshold: 0.1 // wird ausgelöst, wenn 10% des Elements sichtbar sind
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fügt die Klasse 'visible' hinzu, wenn das Element sichtbar wird
                entry.target.classList.add('visible');
            } else {
                // Entfernt die Klasse 'visible', wenn das Element nicht sichtbar ist
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    const elements = document.querySelectorAll('.content');
    elements.forEach(element => {
        observer.observe(element);
    });
});


</script>

