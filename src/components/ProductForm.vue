<script setup>
import { ref, reactive } from 'vue'

const message = ref('Hello world')
const titleClass = ref('title')
const text = ref('')
const counter = reactive({
    count: 0
})
const awesome = ref(true)
let id = 0
const newTodo = ref('')
const todos = ref([
    { id: id, text: 'Learn Java' },
    { id: id, text: 'Learn React' },
    { id: id, text: 'Learn Python' }
])


function increment() {
    counter.count++
}
const toggle = () => {
    awesome.value = !awesome.value
}
const addTodo = () => {
    todos.value.push({ id: id++, text: newTodo.value })
    newTodo.value = ''
}
const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
    <h1 v-bind:class="titleClass">{{ message }}</h1>
    <button @click="increment">Add counter</button>
    <p>Counter is : {{ counter.count }}</p>
    <input v-model="text" placeholder="Type here">
    <p>{{ text }}</p>
    <button @click="toggle">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add todo</button>
    </form>
    <ul v-for="todo in todos" :key="todo.id">
        <li>
            {{ todo.text }}
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
</template>

<style scoped>
.title {
    color: brown;
}
</style>