<template>
  <section>
    <Formulario @novaTarefa="capturarTerefas($event)" />
    <CampoUsuario
      :novaTarefa="tarefas"
      :mostarUsuario="!mostrarModal"
      @excluirTarefa="capturarTerefas($event)"
      @aoSair="mostrarModal = $event"
    />
    <div class="lista">
      <Box v-if="ListaTarefasEstaVazia">
        <p class="has-text-centered sem-tarefas">
          Você não esta muito produtivo hoje :(
        </p>
      </Box>
      <Tarefa
        v-for="(tarefa, index) in tarefas"
        :key="index"
        :tarefa="tarefa"
      />
    </div>

    <Modal v-if="mostrarModal" @aoSalvarNome="mostrarModal = $event" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "../components/Box.vue";
import CampoUsuario from "../components/CampoUsuario.vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";
import Modal from "../components/Modal.vue";

export default defineComponent({
  name: "Tarefas",

  components: {
    Box,
    CampoUsuario,
    Formulario,
    Tarefa,
    Modal,
  },

  data() {
    return {
      tarefas: [] as ITarefa[],
      mostrarModal: false,
    };
  },

  computed: {
    ListaTarefasEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },

  mounted() {
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
          projetos: [{ id: "123123213", nome: "teste" }],
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
  },
});
</script>

<style scoped>
</style>