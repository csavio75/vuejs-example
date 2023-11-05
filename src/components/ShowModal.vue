<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const showModal = ref(false)
</script>

<template>
    <div>
        <button id="show-modal" @click="showModal = true">Show Modal</button>

        <Teleport to="body">
            <modal :show="showModal" @close="showModal = false">
                <template #header>
                    <h3>custom header</h3>
                </template>
            </modal>
        </Teleport>
    </div>
</template>