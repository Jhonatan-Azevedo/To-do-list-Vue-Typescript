class Service {
    alterarTema(modoEscuroAtivo: boolean) {
        const registros = JSON.parse(localStorage.getItem("@registros") || "{}")
        registros.modoEscuro = modoEscuroAtivo

        localStorage.setItem("@registros", JSON.stringify(registros))
    }

    salvarTerefa(tarefa: object) {
        const registros = JSON.parse(localStorage.getItem("@registros") || "{}");
        if (registros.tarefas) {
            registros.tarefas.push(tarefa);
            localStorage.setItem("@registros", JSON.stringify(registros));
        }
    }

    salvarNome(nome: string) {
         const registros = JSON.parse(localStorage.getItem("@registros") || "{}");
        if (registros.user == "") {
            registros.user = nome;
            localStorage.setItem("@registros", JSON.stringify(registros));
        }
    }

    excluirTarefas() {
        const registros = JSON.parse(localStorage.getItem("@registros") || "{}");
        if (registros.tarefas) {
            registros.tarefas = [];
            localStorage.setItem("@registros", JSON.stringify(registros));
        } 
    }

    sair() {
        this.excluirTarefas()
        const registros = JSON.parse(localStorage.getItem("@registros") || "{}");
        if (registros.user) {
            registros.user = "";
            localStorage.setItem("@registros", JSON.stringify(registros));
        } 
    }
}

export default new Service;