<template>
    <div>
        <router-link :to="{ name: 'Home' }">Home</router-link> |
        <router-link :to="{ name: 'Grid' }">Grid</router-link> |
        <router-link :to="{ name: 'Component' }">Component</router-link> |
        <router-link :to="{ name: 'Modal' }">Modal</router-link>
    </div>

    <p>
        <button @click="stepTo(-1)">Go back 1 step</button>
        <button @click="stepTo(1)">Go forward 1 step</button>

        <button @click="pushTo('/not-found')">Redirect to "/user/1"</button>
    </p>

    <router-view />
</template>
  
<script>
import { useRouter, useRoute } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const route = useRoute()

        function stepTo(step) { router.go(step) }
        function pushTo(route) { router.push(route) }

        return {
            stepTo,
            pushTo
        }
    }
}
</script>