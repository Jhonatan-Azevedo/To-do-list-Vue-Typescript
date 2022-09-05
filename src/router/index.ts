import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// Components
import Tarefas from "./../views/Tarefas.vue"
import Projetos from "../views/Projetos.vue"
import FormularioProjeto from "./../views/Projetos/Formulario.vue"
import Lista from "./../views/Projetos/Lista.vue"


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: "tarefas",
        component: Tarefas
    },
    {
        path: "/projetos",
        component: Projetos,
        children: [
            {
                path: '',
                name: "projetos",
                component: Lista
            },
            {
                path: 'novo',
                component: FormularioProjeto
            },
            {
                path: ':id',
                component: FormularioProjeto,
                props: true
            },
        ]
    }
   
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;