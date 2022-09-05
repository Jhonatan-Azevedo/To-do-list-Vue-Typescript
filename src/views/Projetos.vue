<template>
  <section class="projetos">
    <div class="header">
      <h1 class="title">Projetos</h1>
      <router-link
        to="/projetos/novo"
        class="button"
        v-if="validarBtnNovoProjeto"
        ><span class="icon is-small"><i class="fas fa-plus"></i> </span>
        <span>Novo Projeto</span>
      </router-link>
    </div>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Projetos",

  computed: {
    validarBtnNovoProjeto() {
      if (this.$route.fullPath.includes("novo") || this.$route.params.id) {
        return false;
      }

      return true;
    },
  },

  setup() {
    const store = useStore();
    return {
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}

.header {
  display: flex;
  justify-content: space-between;
}

.header h1 {
  color: var(--texto-primario);
}

@media only screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    justify-content: start;
  }
}
</style>