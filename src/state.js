// src/state.js
import { ref } from 'vue';

export const productosEnCanasta = ref(0);

export function agregarProductoACanasta() {
  productosEnCanasta.value++;
}
