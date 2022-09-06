<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema($event)" />
    </div>
    <div class="column is three-quarter conteudo">
      <Notificacoes />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Notificacoes from "./components/Notificacoes.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Notificacoes,
  },

  data() {
    return {
      modoEscuroAtivo: false,
    };
  },

  mounted() {
    this.trocarTema();
  },

  methods: {
    trocarTema() {
      const tema = JSON.parse(localStorage.getItem("@registros") || "{}");
      this.modoEscuroAtivo = tema.modoEscuro;
    },
  },
});
</script>

<style src="./AppStyle.css" />
