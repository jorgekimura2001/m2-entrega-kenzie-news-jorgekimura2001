import Requisicao from "./Requisicao.js";
import Cards from "../models/Cards.js";

const conjutoDados = await Requisicao.pegarDados();
console.log(conjutoDados)

const noticias = conjutoDados.map(dado => {
    return Cards.criarCards(dado)
})
console.log(noticias)