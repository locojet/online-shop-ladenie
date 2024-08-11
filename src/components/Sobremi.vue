<template>
    <div id="section-2" class=" sobremi container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
      <div class="flex-1">
        <img class=" leja rounded-full w-48 h-48 mx-auto md:mx-0 filter" src="../assets/leja.jpg" alt="Profilbild" style="filter: sepia(80%) brightness(80%) contrast(120%);">

      </div>
      <div class="flex-1 mt-6 md:mt-0 md:ml-12">
        <h2 class="text-xl font-semibold">Sobre Mi</h2>
        <p class="mt-4 text-base text-gray-600">
          

          
Soy Alejandra Mejía, una joven emprendedora apasionada por el poder de la naturaleza para mejorar nuestra vida. Con esta inspiración, fundé Ladenie para ofrecer productos de alta calidad hechos con ingredientes naturales. Cada fórmula es desarrollada cuidadosamente para brindar lo mejor en cuidado personal.

Nuestro laboratorio es el corazón de la empresa. Junto con un equipo de expertos, trabajo incansablemente en la investigación y desarrollo de nuevas fórmulas, siempre buscando la excelencia. Mi compromiso con la calidad es inquebrantable.

Soy una mujer dedicada y constante, siempre buscando innovar y mejorar nuestros productos. Creo en el poder de la naturaleza y en tratar nuestro cuerpo con respeto y cuidado. Por eso, todos nuestros productos son libres de químicos agresivos y están hechos con amor y dedicación.    
        </p><br><br><br><br>
        <p class="frase text-7xl text-secondary">"Naturaleza, pasión y belleza auténtica."</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe'
  }
  </script>
  
  <style scoped>
  .leja {
    margin: 6rem;
    width: 300px;
    height: 300px;
  }
  .frase{
    font-family: 'kolker-brush', cursive;
    font-weight: 400;
    font-style: normal;
    margin-left: 0rem;
  }

  #section-2{
    width: 100vw;
    height: 100vh;
  }

  

  @media screen and (max-width: 1024px){
    .leja{
      margin: 0 auto;
    }
  }
  </style>
  