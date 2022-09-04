<template>
  <header>
    <h1>
      <span> To-do-List </span>
      <span class="icon">
        <i class="fa fa-list-check"></i>
      </span>
    </h1>

    <button class="button" @click="alterarTema()">
      {{ textoBotao }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BarraLateral",

  emits: ["aoTemaAlterado"],

  data() {
    return {
      modoEscuroAtivo: false,
    };
  },

  computed: {
    textoBotao(): string {
      if (this.modoEscuroAtivo) {
        return "Desativar modo escuro";
      }

      return "Ativar modo escuro";
    },
  },

  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
    },
  },
});
</script>

<style scoped>
header {
  background-color: #1c545c;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 5rem;
}

header h1 {
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  border: 1px solid #fff;
  padding: 2%;
  margin: 5px;
  border-radius: 5px;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>