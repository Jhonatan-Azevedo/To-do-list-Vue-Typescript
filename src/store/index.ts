import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import { v4 as uuidv4 } from "uuid";
import { ADICIONA_PROJETO, ALTERAR_PROJETO, APAGAR_PROJETO } from "./types-mutations";

interface Estado {
    projetos: IProjeto[]
}

const registros = JSON.parse(localStorage.getItem("@registros") || "{}")

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: registros.projetos
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: uuidv4(),
                nome: nomeDoProjeto,
            } as IProjeto
            
            registros.projetos.push(projeto)

            localStorage.setItem("@registros", JSON.stringify(registros))
            
            // state.projetos.push(projeto)
        },
        [ALTERAR_PROJETO](state, projeto: IProjeto) {
            const index = registros.projetos.findIndex((item: IProjeto) => item.id == projeto.id)
            registros.projetos[index] = projeto
            localStorage.setItem("@registros", JSON.stringify(registros))

            // state.projetos[index] = projeto
        },
        [APAGAR_PROJETO](state, id: string) {
            registros.projetos = registros.projetos.filter((item: IProjeto) => item.id != id)
            localStorage.setItem("@registros", JSON.stringify(registros))
            
            state.projetos = state.projetos.filter(proj => proj.id != id)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}
