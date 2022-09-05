<template>
  <section>
    <div class="informativo">Clique em cima do projeto para editalo</div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="projeto in projetos"
          :key="projeto.id"
          @click="editarProjeto(projeto.id)"
          class="cursor-pointer"
        >
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Lista",

  methods: {
    editarProjeto(id: string) {
      this.$router.push(`/projetos/${id}`);
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
.informativo {
  font-size: 13px;
  color: red;
}

.cursor-pointer {
  cursor: pointer;
}
</style>