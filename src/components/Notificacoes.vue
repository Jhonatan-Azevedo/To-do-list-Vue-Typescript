<template>
  <section class="notificacoes">
    <article class="message is-success">
      <div class="message-header">
        <p>Success</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">Teste de sucesso</div>
    </article>
    <article class="message is-warning">
      <div class="message-header">
        <p>Success</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">Teste de sucesso</div>
    </article>
    <article class="message is-danger">
      <div class="message-header">
        <p>Success</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">Teste de sucesso</div>
    </article>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Notificacoes",
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 1000;
}
</style>