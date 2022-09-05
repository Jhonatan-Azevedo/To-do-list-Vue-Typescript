<template>
  <div class="usuario" v-if="mostarUsuario">
    <div>
      <span>
        Olá <span class="nome-usuario">{{ capturarNomeDoUsuario }}</span
        >, aqui esta suas tarefas:
      </span>
    </div>
    <div class="group-buttons">
      <button
        class="button is-danger is-small"
        v-if="verificarTarefas"
        type="button"
        @click="excluirTarefas()"
      >
        <span> Excluir tarefas </span> <i class="fa-solid fa-trash-can"></i>
      </button>
      <button class="button is-dark is-small" @click="sair()">
        Sair <i class="fa-solid fa-door-open"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Service from "@/service";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "CampoUsuario",
  data() {
    return {
      nomeDoUsuario: "",
      mostrarUsuario: false,
    };
  },

  props: {
    novaTarefa: {
      type: Array,
    },
    mostarUsuario: {
      type: Boolean,
    },
  },

  emits: ["excluirTarefa", "aoSair"],

  computed: {
    verificarTarefas() {
      if (this.novaTarefa.length > 0) {
        return true;
      }

      return false;
    },

    capturarNomeDoUsuario() {
      const registros = JSON.parse(localStorage.getItem("@registros") || "{}");
      if (
        this.mostarUsuario &&
        registros.user != undefined &&
        registros.user != ""
      ) {
        return registros.user;
      }

      return "";
    },
  },

  methods: {
    excluirTarefas() {
      Service.excluirTarefas();
      this.$emit("excluirTarefa", true);
    },

    sair() {
      Service.sair();
      this.$emit("excluirTarefa", true);
      this.$emit("aoSair", true);
    },
  },
});
</script>

<style scoped>
.usuario {
  font-weight: bold;
  margin-top: -17px;
  margin-bottom: 5px;
  color: var(--texto-primario);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.nome-usuario {
  color: var(--texto-secundario);
}

.group-buttons button {
  margin: 0 2px;
}

button i {
  margin: 0 5px;
}

@media only screen and (max-width: 480px) {
  .usuario {
    flex-direction: column;
  }
}
</style>