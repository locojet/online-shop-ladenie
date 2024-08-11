<!-- src/components/CartPage.vue -->
<template>
    <div class="cart-page">
      <h1>Warenkorb</h1>
      <div v-if="cartItems.length === 0">Der Warenkorb ist leer.</div>
      <div v-else>
        <ul>
          <li v-for="item in cartItems" :key="item.id">
            {{ item.name }} - {{ item.price }} - Menge: {{ item.quantity }}
            <button @click="removeItem(item.id)">Entfernen</button>
            <button @click="adjustQuantity(item.id, 'decrease')">-</button>
            <button @click="adjustQuantity(item.id, 'increase')">+</button>
          </li>
        </ul>
        <div class="total">
          <h2>Gesamtbetrag: {{ totalAmount }} USD</h2>
          <button @click="checkout">Jetzt bezahlen</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { cartItems, removeItemFromCart, adjustItemQuantity } from '../state'; // Beispielhafte Imports
  
  const totalAmount = ref(0);
  
  // Berechnung des Gesamtbetrags
  function calculateTotal() {
    totalAmount.value = cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  // Aufruf der Berechnung bei Änderung des Warenkorbs
  watch(cartItems, calculateTotal, { deep: true });
  
  // Entfernen eines Artikels
  function removeItem(id) {
    removeItemFromCart(id);
  }
  
  // Menge eines Artikels anpassen
  function adjustQuantity(id, action) {
    adjustItemQuantity(id, action);
  }
  
  // Zur Kasse gehen (hier kannst du deine Logik hinzufügen)
  function checkout() {
    console.log('Checkout wird bearbeitet');
  }
  </script>
  
  <style scoped>
  /* Stil für die Warenkorb-Seite */
  .cart-page {
    padding: 20px;
  }
  
  .total {
    margin-top: 20px;
  }
  
  button {
    margin-left: 10px;
  }
  </style>
  