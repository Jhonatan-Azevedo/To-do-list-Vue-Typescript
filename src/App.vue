<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema($event)" />
    </div>
    <div class="column is three-quarter conteudo">
      <Formulario @novaTarefa="salvarTerefa($event)" />
      <div class="lista">
        <Tarefa
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <Box v-if="ListaTarefasEstaVazia">
          <p class="has-text-centered">Você não esta muito produtivo hoje :(</p>
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Box from "./components/Box.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
import ITarefa from "./interfaces/ITarefa";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Box,
    Formulario,
    Tarefa,
  },

  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
    };
  },

  computed: {
    ListaTarefasEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },

  mounted() {
    this.trocarTema();
    const registros = JSON.parse(localStorage.getItem("@registros") || "{}");
    console.log(registros);
    if (registros == {}) {
      const novoRegistros = {
        user: "",
        tarefas: [],
        modoEscuro: false,
      };

      localStorage.setItem("@registros", JSON.stringify(novoRegistros));
    } else if (registros.tarefas) {
      this.tarefas = registros.tarefas;
      console.log(this.tarefas);
    }
  },

  methods: {
    salvarTerefa(novaTarefa: boolean) {
      console.log("Nova tarefa");
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

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --bg-form: rgb(230, 230, 230);
  --texto-primario: #222;
}

main.modo-escuro {
  --bg-primario: #1b1c20;
  --bg-form: rgb(56, 56, 56);
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
