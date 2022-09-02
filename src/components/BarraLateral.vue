<template>
  <header>
    <h1>
      <span> To-do-List </span>
      <span class="icon">
        <i class="fa fa-list-check"></i>
      </span>
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BarraLateral",
});
</script>

<style scoped>
header {
  background-color: #00d7f38e;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 5rem;
}

header h1 {
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>