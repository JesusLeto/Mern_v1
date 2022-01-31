import VueRouter from "vue-router";
import RegisterLayout from "@/layouts/RegisterLayout.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";
import {RouteConfig} from "vue-router";

const routes: RouteConfig[]  = [
    {
        path: "/login",
        component: LoginLayout
    },
    {
        path: "/register",
        component: RegisterLayout
    },
]

const router = new VueRouter({
    routes
})

export default router