<script setup>
import { ref, reactive, computed } from 'vue'

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
    { id: id, text: 'Learn Java', done: true },
    { id: id, text: 'Learn React', done: false },
    { id: id, text: 'Learn Python', done: false }
])
const hideCompleted = ref(false)

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
const filteredTodos = computed(() => {
    return hideCompleted.value
        ? todos.value.filter((t) => !t.done)
        : todos.value
})
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
    <ul v-for="todo in filteredTodos" :key="todo.id">
        <li>
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
</template>

<style scoped>
.title {
    color: brown;
}

.done {
    text-decoration: line-through;
}
</style>