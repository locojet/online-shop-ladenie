<template>
  <div class="nav-container">
    <Disclosure as="nav" class="bg-primary" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-secondary hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <h1 class="text-white font-bold gold-text h-16 w-16 logo">Ladenie</h1>
            </div>
            
            <div class="hidden sm:ml-16 sm:block">
              <div class="nav-menu flex space-x-4">
                <!-- Die Scroll-To-Click-Funktion wird hier hinzugefügt -->
                <a v-for="item in navigation" 
                   :key="item.name" 
                   :href="item.href" 
                   @click.prevent="scrollTo(item.href)"
                   :class="[item.current ? 'bg-secondary text-white' : 'text-white hover:bg-secondary hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" 
                   :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="carro-de-compras h-10 w-10">
            <a href=""><img src="../assets/bolsa-de-compras.svg" alt=""></a>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" class="relative rounded-full p-1 text-white hover:text-white focus:outline-none">
              <img class="h-6 w-6" aria-hidden="true" src="../assets/whatsapp.svg" alt="">
            </button>
  
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="nav-boton relative flex rounded-full bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img class="leja h-8 w-8 rounded-full" src="../assets/leja.jpg" alt="" />
                </MenuButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" 
                            :key="item.name" 
                            as="a" 
                            :href="item.href" 
                            @click.prevent="scrollTo(item.href)"
                            :class="[item.current ? 'bg-secondary text-white' : 'text-white hover:bg-secondary hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" 
                            :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import VueScrollTo from 'vue-scrollto';

// Navigation Einträge
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Productos', href: '#section-1', current: false },
  { name: 'Sobre mi', href: '#section-2', current: false },
  { name: 'Contacto', href: '#section-3', current: false },
];

// Die Scroll-Funktion
function scrollTo(target) {
  VueScrollTo.scrollTo(target, 800);  // 800ms für eine sanfte Scroll-Animation
}
</script>

<style scoped>
* {
  transition: transform 0.1s ease-in-out;
}

.carro-de-compras {
  margin-right: 4rem;
}

.logo {
  margin-top: -5px;
}

.nav-menu {
  margin-top: 10px;
}

h1 {
  font-size: 3rem;
  font-family: kolker-brush;
  font-weight: 400;
  font-style: normal;
}

@media screen and (max-width: 780px) {
  .carro-de-compras {
    margin-right: 120px;
  }
  .logo {
    margin-top: 0px;
  }
}
</style>
