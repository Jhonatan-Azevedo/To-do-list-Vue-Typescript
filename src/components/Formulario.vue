<template>
  <section class="box formulario">
    <div class="columns">
      <div
        class="column is-6"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar ?"
          v-model="descricao"
        />
      </div>

      <div class="column">
        <Temporizador
          @temporizadorFinalizado="finalizarTarefa($event)"
          :preencherDescricao="descricaoVazia"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "Formulario",

  components: {
    Temporizador,
  },

  emits: ["aoSalvarTarefa"],

  watch: {
    descricao(newValue) {
      if (newValue) {
        this.descricaoVazia = false;
        return;
      }

      this.descricaoVazia = true;
      return;
    },
  },

  data() {
    return {
      descricao: "",
      descricaoVazia: true,
    };
  },

  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
      });

      this.descricao = "";
    },
  },
});
</script>

<style scoped>
.formulario {
  color: var(--texto-primairo);
  background-color: var(--bg-form);
}
</style>