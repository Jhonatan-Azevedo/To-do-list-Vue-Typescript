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
        <button class="button is-dark" type="button" @click="$router.go(-1)">
          Voltar
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

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

  methods: {
    salvarProjeto() {
      if (this.id) {
        this.store.commit("ALTERAR_PROJETO", {
          id: this.id,
          nome: this.nomeDoProjeto,
        });

        this.nomeDoProjeto = "";
        this.$router.push("/projetos");
      } else {
        this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto);
        this.nomeDoProjeto = "";
        this.$router.push("/projetos");
      }
    },
  },

  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>

<style scoped>
.footer-btn {
  display: flex;
  justify-content: space-between;
}
</style>