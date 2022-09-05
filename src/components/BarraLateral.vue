<template>
  <header>
    <div>
      <h1>
        <span> To-do-List </span>
        <span class="icon">
          <i class="fa fa-list-check"></i>
        </span>
      </h1>

      <nav class="mt-5">
        <ul>
          <li>
            <router-link class="link" to="/">
              Tarefas <i class="fas fa-tasks"></i>
            </router-link>
            <router-link class="link" to="/projetos">
              Projetos <i class="fas fa-project-diagram"></i>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <button class="button" @click="alterarTema()">
        {{ textoBotao }}
        <i
          v-if="textoBotao != 'Ativar modo escuro'"
          class="fa-regular fa-lightbulb"
        ></i>
        <i v-else class="fa-solid fa-lightbulb"></i>
      </button>

      <span
        >Desenvolvido por
        <a href="https://br.linkedin.com/in/jazevedodev" target="blank"
          >Jhonatan Azevedo <i class="fa-brands fa-linkedin"></i
        ></a>
      </span>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Service from "./../service";

export default defineComponent({
  name: "BarraLateral",

  emits: ["aoTemaAlterado"],

  data() {
    return {
      modoEscuroAtivo: false,
    };
  },

  computed: {
    textoBotao(): string {
      if (this.modoEscuroAtivo) {
        return "Desativar modo escuro";
      }

      return "Ativar modo escuro";
    },
  },

  mounted() {
    const tema = JSON.parse(localStorage.getItem("@registros") || "{}");
    this.modoEscuroAtivo = tema.modoEscuro;
  },

  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      Service.alterarTema(this.modoEscuroAtivo);
      this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
    },
  },
});
</script>

<style scoped>
header {
  background-color: #1c545c;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header h1 {
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  border: 1px solid #fff;
  padding: 2%;
  margin: 5px;
  border-radius: 5px;
}

header div {
  display: flex;
  flex-direction: column;
}

header div span {
  color: #ddd;
  font-size: 17px;
  margin-top: 10px;
}

header div span a {
  text-decoration: none;
  color: #faf0ca;
  transition: all ease 0.3s;
}

header div span a:hover {
  color: #000000;
  font-weight: bold;
}

header div button i {
  margin: 0 5px;
}

nav li {
  text-align: left;
  margin: 10px 0;
  display: flex;
  flex-direction: column !important;
}

nav li a {
  padding: 10px;
}

.link {
  color: #fff;
  transition: all ease 0.3s;
}

.link:hover {
  color: #faf0ca;
}

.link.router-link-active {
  color: #faf0ca;
  border-left: 1px solid #faf0ca;
  background-color: rgba(0, 0, 0, 0.3);
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>