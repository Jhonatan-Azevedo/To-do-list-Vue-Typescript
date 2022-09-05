<template>
  <section class="modal-user">
    <form>
      <div class="title">
        <h1>Olá, seja Bem vindo(a)</h1>
        <i class="fa-solid fa-list-check"></i>
      </div>

      <div>
        <label>Digite seu nome:</label>
        <input class="input" type="text" v-model="nomeUsuario" />
      </div>

      <div>
        <button class="button" @click="salvarUser()" type="button">
          Continuar
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import Service from "@/service";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Modal",
  data() {
    return {
      nomeUsuario: "",
    };
  },

  emits: ["aoSalvarNome"],

  methods: {
    salvarUser() {
      if (this.nomeUsuario != "") {
        console.log(this.nomeUsuario);
        Service.salvarNome(this.nomeUsuario);

        this.nomeUsuario = "";

        this.$emit("aoSalvarNome", false);
      }
    },
  },
});
</script>

<style scoped>
.modal-user {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-user .title {
  height: 40px;
  font-size: 20px;
  border-radius: 0;
  border-bottom: #ddd 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.modal-user .title h1 {
  font-weight: bold;
}

.modal-user form {
  background-color: #fff;
  width: 500px;
  height: 200px;
  z-index: 100;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.modal-user form div {
  background-color: #fff;
  width: 500px;
  height: 300px;
  z-index: 100;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 10px;
}

.modal-user form div button {
  background-color: #1c545c;
  color: #fff;
  transition: all ease 0.3s;
}

.modal-user form div button:hover {
  background-color: #418d99;
}
</style>