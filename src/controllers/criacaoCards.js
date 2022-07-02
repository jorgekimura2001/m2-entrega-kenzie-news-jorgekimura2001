import Requisicao from "./Requisicao.js";
import Cards from "../models/Cards.js";
import CardPrincipal from "../models/CardPrincipal.js";

export const conjuntoDados = await Requisicao.pegarDados();

export const noticias = conjuntoDados.map(dado => {
    return Cards.criarCards(dado);
})

export function noticiaPesquisada(idNoticia) {
    if (idNoticia !== undefined) {
        const noticiaEncontrada = noticias.find(elem => elem.id === idNoticia);
        const cardNoticiaPesquisada = CardPrincipal.criarCardPrincipal(noticiaEncontrada);
        return cardNoticiaPesquisada
    }
    else {
        const noticiaEncontrada = noticias.find(elem => elem.id === '2');
        const cardNoticiaPesquisada =
          CardPrincipal.criarCardPrincipal(noticiaEncontrada);
        return cardNoticiaPesquisada;
    }
}