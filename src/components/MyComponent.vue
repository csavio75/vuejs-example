<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

const props = defineProps({
    msg: String
})
const emit = defineEmits(['example'])
emit('example', 'Message from child')

async function fetchData() {
    todoData.value = null
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
    <h2>{{ msg || 'No props passed yet' }}</h2>
</template>