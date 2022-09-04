<template>
  <section class="box has-text-weight-bold">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Box",
});
</script>

<style scoped>
.box {
  background-color: #faf0ca;
}
</style>