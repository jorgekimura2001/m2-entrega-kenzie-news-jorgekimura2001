import { noticias } from "./controllers/criacaoCards.js"

const main = document.querySelector('main')

main.append(...noticias)