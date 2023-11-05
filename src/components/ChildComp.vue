<script setup>
import { ref } from 'vue';
import MyComponent from './MyComponent.vue';
import SampleComponent from './SampleComponent.vue';

const greeting = ref("Hello from parent")
const childMsg = ref("No child msg yet")
const parentMsg = ref("Parent Msg!")
</script>

<template>
    <div>
        <MyComponent :msg="greeting" @example="(msg) => childMsg = msg" />
        <h3>{{ childMsg }}</h3>
        <SampleComponent>{{ parentMsg }}</SampleComponent>
    </div>
</template>