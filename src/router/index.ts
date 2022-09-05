import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// Components
import Tarefas from "./../views/Tarefas.vue"
import Projetos from "../views/Projetos.vue"
import FormularioProjeto from "./../views/Projetos/Formulario.vue"


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: "tarefas",
        component: Tarefas
    },
    {
        path: '/projetos',
        name: "projetos",
        component: Projetos
    },
    {
        path: '/projetos/novo',
        component: FormularioProjeto
    },
    {
        path: '/projetos/:id',
        component: FormularioProjeto,
        props: true
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;