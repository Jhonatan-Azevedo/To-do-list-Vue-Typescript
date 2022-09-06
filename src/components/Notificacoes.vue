<template>
  <section class="notificacoes">
    <article
      class="message is-success"
      :class="contexto[notificacao.tipo]"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
    >
      <div class="message-header">
        <p>{{ notificacao.titulo }}</p>
      </div>
      <div class="message-body">{{ notificacao.texto }}</div>
    </article>
  </section>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { TipoDeNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  name: "Notificacoes",

  data() {
    return {
      contexto: {
        [TipoDeNotificacao.SUCESSO]: "is-success",
        [TipoDeNotificacao.ATENCAO]: "is-warning",
        [TipoDeNotificacao.FALHA]: "is-danger",
      },
    };
  },

  setup() {
    const store = useStore();

    return {
      notificacoes: computed(() => store.state.notificacoes),
    };
  },
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