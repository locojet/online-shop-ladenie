<template>
    <div id="section-0" class="video-background">
        <video  id="background-video" style="filter: sepia(100%) hue-rotate(-70deg) brightness(40%);" autoplay muted loop playsinline>
            <source src="../assets/leja.mp4" type="video/mp4">
            Ihr Browser unterstützt keine Video-Tags.
        </video>
    </div>
    <div class="slogan absolute text-white">
        <h1>Desata tu belleza,</h1>
        <h3>vive tu esencia</h3>
    </div>

    <!-- Icons rechts unten im Video -->
    <div  id="icons-medien" class="social-icons" :class="{ 'hidden': isHidden }">
        <a target="_blank" href="https://www.instagram.com/alenintips">
            <img src="../assets/instagramicon.png" alt="Instagram" class="icon" />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@alenintips?_t=8omB1tLfpE8&_r=1">
            <img src="../assets/tiktokicon.png" alt="TikTok" class="icon" />
        </a>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    handleScroll() {
      // Überprüfen, wie viel der Benutzer gescrollt hat
      this.isHidden = window.scrollY > 100; // Passen Sie diesen Wert nach Bedarf an
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style scoped>


.video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    overflow: hidden;
    z-index: -1;
    margin-top: 2rem;
    opacity: 0.7;
}

#background-video {
    width: 100%;
    height: 500px;
    object-fit: cover;
    margin-top: 2rem;
}

.slogan {
    position: relative;
    z-index: 10;
    margin-top: 6rem;
    margin-bottom: -5rem;
    margin-left: 15%;
}

h1 {
    font-size: 10rem;
    font-family: 'kolker-brush', cursive;
    font-weight: 400;
    font-style: normal;
}

h3 {
    font-size: 1.5rem;
    margin-left: 20rem;
    margin-top: -3rem;
}

/* Icons rechts unten */
.social-icons {
    position: fixed; /* Fixierte Position relativ zum Viewport */
    right: 4rem; /* Abstand vom rechten Rand */
    top: 15rem; /* Abstand vom oberen Rand */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 20;
    opacity: 1; /* Standard-Opazität */
    transition: opacity 0.5s ease; /* Übergang für die Opazität */
}

.icon {
    width: 30px;
    height: 30px;
}

/* Verstecken der Icons mit sanfter Opazitätsänderung */
.hidden {
    opacity: 0; /* Opazität auf 0 setzen */
}

@media screen and (max-width: 1100px) {
    .video-background {
        height: 500px;
    }
    .slogan {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-left: 0;
        margin-top: 10rem;
    }
    h1, h3 {
        margin: 0;
        font-size: 4rem;
    }
    h3 {
        font-size: 1rem;
    }
    .icon {
        width: 30px;
        height: 30px;
    }
    .social-icons {
        right: 1rem;
        top: 20rem;
    }
}
</style>
