<script setup>
import { ref } from 'vue';

import MyComponent from './components/MyComponent.vue';
import ProductForm from './components/ProductForm.vue';
import ChildComp from './components/ChildComp.vue';

const greeting = ref("Hello from parent")
const childMsg = ref("No child msg yet")
</script>

<template>
  <ProductForm />
  <MyComponent :msg="greeting" @example="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
  <ChildComp>{{ greeting }}</ChildComp>
</template>
