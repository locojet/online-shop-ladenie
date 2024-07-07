<template>
    <div class="video-background">
        <video autoplay muted loop id="background-video" style="filter: sepia(100%) hue-rotate(-70deg) brightness(40%);">
    <source src="../assets/Automatic.mp4" type="video/mp4">
    Ihr Browser unterstützt keine Video-Tags.
</video>
    </div>
    <div class="slogan absolute text-white">
        <h1>Desata tu belleza, </h1>
        <h3>vive tu esencia</h3>
    </div>
</template>
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
    object-fit: cover; /* Sorgt dafür, dass das Video den Container vollständig 
    abdeckt */
    margin-top: 2rem;
    
}

.slogan {
    position: relative; /* Stellt sicher, dass die .slogan Klasse über dem Video liegt */
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

@media screen and (max-width: 780px) {

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
        font-size: 4rem; /* Angepasste Größe für h1 */
    }
    h3 {
        font-size: 1rem; /* Angepasste Größe für h3 */
        
    }
}
</style>
