import Requisicao from "./Requisicao.js";
import Cards from "../models/Cards.js";
import CardPrincipal from "../models/CardPrincipal.js";

export const conjutoDados = await Requisicao.pegarDados();

export const noticias = conjutoDados.map(dado => {
    return Cards.criarCards(dado);
})

export function noticiaPesquisada(idNoticia){
    const noticiaEncontrada = noticias.find(elem => elem.id === idNoticia);
    const cardNoticiaPesquisada = CardPrincipal.criarCardPrincipal(noticiaEncontrada);
    return cardNoticiaPesquisada
}
