<template>
  <section>
    <form @submit.prevent="salvarProjeto()" class="mt-5">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto</label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field footer-btn">
        <button class="button is-success" type="submit">Salvar</button>
        <div>
          <button
            class="button is-danger"
            type="button"
            @click="apagarProjeto()"
            v-if="ocultarBtnExcluir"
          >
            Excluir
          </button>

          <button class="button is-dark" type="button" @click="$router.go(-1)">
            Voltar
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import {
  ADICIONA_PROJETO,
  ALTERAR_PROJETO,
  APAGAR_PROJETO,
} from "@/store/types-mutations";
import { TipoDeNotificacao } from "@/interfaces/INotificacao";
import useNotificador from "@/hooks/notificador";

export default defineComponent({
  name: "Formulario",

  props: {
    id: {
      type: String,
    },
  },

  data() {
    return {
      nomeDoProjeto: "",
    };
  },

  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );

      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  computed: {
    ocultarBtnExcluir() {
      if (this.$route.params.id) {
        return true;
      }

      return false;
    },
  },

  methods: {
    salvarProjeto() {
      if (this.id) {
        this.store.commit(ALTERAR_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        });

        this.nomeDoProjeto = "";
        this.$router.push("/projetos");
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
        this.nomeDoProjeto = "";

        this.notificar(
          TipoDeNotificacao.ATENCAO,
          "Novo projeto salvo",
          "Sucesso! Seu projeto já esta disponível."
        );
        this.$router.push("/projetos");
      }
    },

    apagarProjeto() {
      this.store.commit(APAGAR_PROJETO, this.id);
      this.$router.push("/projetos");
    },
  },

  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar,
    };
  },
});
</script>

<style scoped>
.field label {
  color: var(--texto-primario);
}

.field input {
  background-color: var(--bg-form);
  color: var(--texto-primario);
  border-color: var(--bg-form);
}

.footer-btn {
  display: flex;
  justify-content: space-between;
}

.footer-btn div button {
  margin: 0 5px;
}
</style>