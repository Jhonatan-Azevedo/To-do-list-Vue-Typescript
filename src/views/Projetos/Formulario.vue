<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvarProjeto()">
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

  data() {
    return {
      nomeDoProjeto: "",
    };
  },

  methods: {
    salvarProjeto() {
      this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto);
      this.nomeDoProjeto = "";
      this.$router.push("/projetos");
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
.projetos {
  padding: 1.25rem;
}

.footer-btn {
  display: flex;
  justify-content: space-between;
}
</style>