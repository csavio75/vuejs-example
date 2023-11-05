<script setup>
import { ref } from 'vue';

import MyComponent from './components/MyComponent.vue';
import ProductForm from './components/ProductForm.vue';
import ChildComp from './components/ChildComp.vue';
import GridFilterComponent from './components/GridFilterComponent.vue';
import Modal from './components/Modal.vue';

const greeting = ref("Hello from parent")
const childMsg = ref("No child msg yet")
const showModal = ref(false)
</script>

<template>
  <ProductForm />
  <MyComponent :msg="greeting" @example="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
  <ChildComp>{{ greeting }}</ChildComp>
  <GridFilterComponent />
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template>
