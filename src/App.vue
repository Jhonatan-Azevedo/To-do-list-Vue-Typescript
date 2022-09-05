<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema($event)" />
    </div>
    <div class="column is three-quarter conteudo">
      <Formulario @novaTarefa="capturarTerefas($event)" />
      <CampoUsuario
        :novaTarefa="tarefas"
        :mostarUsuario="!mostrarModal"
        @excluirTarefa="capturarTerefas($event)"
        @aoSair="mostrarModal = $event"
      />
      <div class="lista">
        <Tarefa
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <Box v-if="ListaTarefasEstaVazia">
          <p class="has-text-centered sem-tarefas">
            Você não esta muito produtivo hoje :(
          </p>
        </Box>
        <Modal v-if="mostrarModal" @aoSalvarNome="mostrarModal = $event" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Box from "./components/Box.vue";
import CampoUsuario from "./components/CampoUsuario.vue";
import Formulario from "./components/Formulario.vue";
import Modal from "./components/Modal.vue";
import Tarefa from "./components/Tarefa.vue";
import ITarefa from "./interfaces/ITarefa";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Box,
    CampoUsuario,
    Formulario,
    Modal,
    Tarefa,
  },

  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
      mostrarModal: false,
    };
  },

  computed: {
    ListaTarefasEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },

  mounted() {
    this.trocarTema();
    this.inicioComponente();
    this.ocultarModal();
  },

  methods: {
    inicioComponente() {
      const registros = JSON.parse(localStorage.getItem("@registros") || "{}");
      if (registros.user == undefined) {
        console.log("novo registro");
        const novoRegistros = {
          user: "",
          tarefas: [],
          modoEscuro: false,
        };

        localStorage.setItem("@registros", JSON.stringify(novoRegistros));
      } else if (registros.tarefas) {
        this.tarefas = registros.tarefas;
      }
    },

    ocultarModal() {
      const registros = JSON.parse(localStorage.getItem("@registros") || "{}");
      if (registros.user != undefined && registros.user != "") {
        return (this.mostrarModal = false);
      }

      return (this.mostrarModal = true);
    },

    capturarTerefas(novaTarefa: boolean) {
      const registos = JSON.parse(localStorage.getItem("@registros") || "{}");
      if (novaTarefa && registos.tarefas) this.tarefas = registos.tarefas;
    },

    trocarTema() {
      const tema = JSON.parse(localStorage.getItem("@registros") || "{}");
      this.modoEscuroAtivo = tema.modoEscuro;
    },
  },
});
</script>

<style src="./AppStyle.css" />
