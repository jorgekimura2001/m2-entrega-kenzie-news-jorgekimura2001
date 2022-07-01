import Requisicao from '../src/controllers/Requisicao.js'
import Cards from './models/Cards.js'

const conjutoDados = await Requisicao.pegarDados();
const main = document.querySelector('main')

const noticias = conjutoDados.map(dado => {
    return Cards.criarCards(dado)
})
main.append(...noticias)