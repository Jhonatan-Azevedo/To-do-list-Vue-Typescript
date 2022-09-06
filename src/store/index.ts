import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import { v4 as uuidv4 } from "uuid";
import { ADICIONA_PROJETO, ALTERAR_PROJETO, APAGAR_PROJETO, NOTIFICAR } from "./types-mutations";
import { INotificacao, TipoDeNotificacao } from "@/interfaces/INotificacao";

interface Estado {
    projetos: IProjeto[]
    notificacoes: INotificacao[]
}

const registros = JSON.parse(localStorage.getItem("@registros") || "{}")

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: registros.projetos,
        notificacoes: [
            
        ]
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
        },
        [NOTIFICAR](state, novaNotificacao: INotificacao) {
            novaNotificacao.id = uuidv4();
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter((item: INotificacao) => item.id != novaNotificacao.id)
            }, 3000)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}
