<template>
 
  <div class="hintergrund bg-secondary3">
    <!-- Layer 1: Enthält viele rosa Divs -->
    <div class="absolute inset-0 pointer-events-none" id="layer1">
      <div
        v-for="(pos, index) in positions"
        :key="index"
        :class="['absolute', 'rounded-full', pos.color, 'blur-effect']"
        :style="{ ...pos.style, width: `${pos.size}px`, height: `${pos.size}px` }"
      ></div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      positions: Array.from({ length: 30 }, () => this.initialPosition()),
    };
  },
  methods: {
    initialPosition() {
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      const direction = Math.random() > 0.7 ? 1 : -1; // Zufällige Richtung (nach oben oder unten)
      const speed = Math.random() * 0.02 + 0.01; // Zufällige, sehr langsame Geschwindigkeit
      const size = Math.random() * 40 + 16; // Unterschiedliche Größen zwischen 16 und 56
      const colorClasses = [
        "bg-pink-100",
        "bg-pink-200",
        "bg-pink-300",
        
      ];
      const color = colorClasses[Math.floor(Math.random() * colorClasses.length)];
      const blur = Math.random() > 0.5; // Zufällige Unschärfe
      return {
        x,
        y,
        direction,
        speed,
        size,
        color,
        blur,
        style: {
          top: `${y}%`,
          left: `${x}%`,
        },
      };
    },
    updateParallax() {
      this.positions = this.positions.map((pos) => {
        const newY = pos.y + pos.direction * window.scrollY * pos.speed;
        return {
          ...pos,
          style: {
            top: `${newY}%`,
            left: `${pos.x}%`,
          },
        };
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateParallax);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateParallax);
  },
};
</script>

<style scoped>
.hintergrund {
 z-index: -2;
}
.pointer-events-none {
  pointer-events: none;
}
.absolute {
  position: absolute;
}
.rounded-full {
  border-radius: 50%;
}
.bg-pink-100 {
  background-color: #ffe4e6;
}
.bg-pink-200 {
  background-color: #fecdd3;
}
.bg-pink-300 {
  background-color: #fda4af;
}
.bg-pink-400 {
  background-color: #fb7185;
}
.blur-effect {
  filter: blur(2px); /* Unschärfe-Effekt */
  opacity: 0.7; /* Halbtransparent für subtilen Hintergrundeffekt */
}

.hintergrund {
    position: relative;
    height: 130vh; /* Standardhöhe */
    overflow: hidden;
  }
 
  
  @media (max-width: 780px) { /* Annahme, dass 600px der Breakpoint für sehr kleine Geräte ist */
    .hintergrund {
      height: 320vh;
    }
  }

</style>
