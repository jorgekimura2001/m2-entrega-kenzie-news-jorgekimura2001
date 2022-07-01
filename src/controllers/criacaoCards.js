import Requisicao from "./Requisicao.js";
import Cards from "../models/Cards.js";
import CardPrincipal from "../models/CardPrincipal.js";

export const conjutoDados = await Requisicao.pegarDados();


export const noticias = conjutoDados.map(dado => {
    return Cards.criarCards(dado)
})

export function noticiaPesquisada(idNoticia){

    const noticiaEncontrada = noticias.find(elem => {
        return elem.id === idNoticia
    })
    console.dir(noticiaEncontrada)
    const cardNoticiaPesquisada = CardPrincipal.criarCardPrincipal(noticiaEncontrada)
    console.log(cardNoticiaPesquisada)
    return cardNoticiaPesquisada
}
noticiaPesquisada('3');
