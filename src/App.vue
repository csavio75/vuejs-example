<script setup>
import { ref, computed } from 'vue';

import ProductForm from './components/ProductForm.vue';
import GridFilterComponent from './components/GridFilterComponent.vue';
import ShowModal from './components/ShowModal.vue';
import NotFound from './components/NotFound.vue';
import ChildComp from './components/ChildComp.vue';

const routes = {
  '/': ProductForm,
  '/grid': GridFilterComponent,
  '/modal': ShowModal,
  '/component': ChildComp
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/grid">Grid</a> |
  <a href="#/modal">Modal</a> |
  <a href="#/component">Component</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>
