<template>
  <section class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">Descrição da tarefa</div>
      <div class="column">
        <Cronometro :tempoEmSegundos="15" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Tarefa",
  components: { Cronometro },
});
</script>

<style scoped>
.box {
  background-color: #faf0ca;
}
</style>