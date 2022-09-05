<template>
  <section class="box formulario">
    <div class="columns">
      <div
        class="div-form"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar ?"
          v-model="descricao"
          maxlength="25"
        />
      </div>

      <div class="div-form">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              v-for="projeto in projetos"
              :key="projeto.id"
              value="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <Temporizador
        @temporizadorFinalizado="finalizarTarefa($event)"
        :preencherDescricao="descricaoVazia"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Service from "@/service";
import { computed, defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "Formulario",

  components: {
    Temporizador,
  },

  emits: ["novaTarefa"],

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
      idProjeto: "",
      descricaoVazia: true,
    };
  },

  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      const tarefa = {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
      };

      Service.salvarTerefa(tarefa);
      this.$emit("novaTarefa", true);

      this.descricao = "";
    },
  },

  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

<style scoped>
.formulario {
  color: var(--texto-primairo);
  background-color: var(--bg-form);
}

.columns .div-form:first-child {
  width: 75%;
  margin: 0 10px;
  display: flex;
  justify-content: center;
}

.columns .div-form:last-child {
  width: 25%;
  display: flex;
  justify-content: center;
}

.columns .div-formdiv-form input {
  width: 100% !important;
}
.columns .div-form div select {
  width: 400px !important;
}

@media only screen and (max-width: 768px) {
  .columns .div-form:first-child {
    width: 98%;
  }

  .columns .div-form:last-child {
    width: 98%;
    margin: 10px 10px;
  }

  .columns .div-form div select {
    width: auto;
    margin: 0 auto;
  }
}
</style>