<template>
  <section
    class="is-flex is-align-items-center is-justify-content-space-between"
  >
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <button
      class="button"
      @click="iniciarContagem()"
      :disabled="cronometroRodando"
    >
      <span class="icon">
        <i class="fa fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button
      class="button"
      @click="finalizarContagem()"
      :disabled="!cronometroRodando"
    >
      <span class="icon">
        <i class="fa fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Temporizador",

  emits: ["temporizadorFinalizado"],

  components: {
    Cronometro,
  },

  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },

  methods: {
    iniciarContagem() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos++;
      }, 1000);
    },

    finalizarContagem() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      this.$emit("temporizadorFinalizado", this.tempoEmSegundos);

      this.tempoEmSegundos = 0;
    },
  },
});
</script>

<style scoped>
</style>