import { createRouter, createWebHistory } from 'vue-router';
import ProductIndex from '../Components/Products/index.vue';
import ProductNew from '../Components/Products/new.vue';
import ProductEdit from '../Components/Products/edit.vue';
import NotFound from '../Components/notFound.vue';


const routes = [
    {
        path: "/",
        component: ProductIndex
    },
    {
        path: "/product/new",
        component: ProductNew
    },
    {
        path: "/product/edit/:id",
        component: ProductEdit,
        props: true
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
