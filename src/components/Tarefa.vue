<template>
  <Box>
    <div class="columns tarefa">
      <div class="column is-7">{{ tarefa.descricao }}</div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import ITarefa from "@/interfaces/ITarefa";
import { defineComponent, PropType } from "@vue/runtime-core";
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
}
</style>

