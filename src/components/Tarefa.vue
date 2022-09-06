<template>
  <Box>
    <div class="tarefa">
      <div>{{ tarefa.descricao }}</div>
      <div>
        {{ tarefa.projeto?.nome || "Projeto não selecionado" }}
      </div>
      <div>
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ITarefa from "@/interfaces/ITarefa";
import Box from "./Box.vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Tarefa",
  components: { Box, Cronometro },

  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
});
</script>

<style>
.tarefa {
  color: var(--texto-primario);
  display: flex;
  justify-content: space-between;
}
</style>

