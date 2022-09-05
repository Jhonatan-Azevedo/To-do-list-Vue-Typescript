class Service {
    alterarTema(modoEscuroAtivo: boolean) {
        const registros = JSON.parse(localStorage.getItem("@registros") || "{}")
        registros.modoEscuro = modoEscuroAtivo

        localStorage.setItem("@registros", JSON.stringify(registros))
    }
}

export default new Service;