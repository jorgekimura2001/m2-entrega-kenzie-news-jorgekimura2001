import { noticias } from "./controllers/criacaoCards.js"
import { noticiaPesquisada } from "./controllers/criacaoCards.js"

const main = document.querySelector('main')

main.append(noticiaPesquisada('3'))
main.append(...noticias)
