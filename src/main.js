import { createApp } from 'vue'
import App from './App.vue'
import ProductForm from './components/ProductForm.vue'
import GridFilterComponent from './components/GridFilterComponent.vue'
import ChildComp from './components/ChildComp.vue'
import NotFound from './components/NotFound.vue'
import ShowModal from './components/ShowModal.vue'

// import router functions
import { createRouter, createWebHistory } from 'vue-router'
// setup routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ProductForm
        },
        {
            path: '/grid',
            name: 'Grid',
            component: GridFilterComponent
        },
        {
            path: '/component',
            name: 'Component',
            component: ChildComp
        },
        {
            path: '/modal',
            name: 'Modal',
            component: ShowModal
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound
        }
    ]
})

const app = createApp(App)

// tell Vue to use router
app.use(router)
app.mount('#app')