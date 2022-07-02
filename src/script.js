import { noticias } from "./controllers/criacaoCards.js";
import { noticiaPesquisada } from "./controllers/criacaoCards.js";

const main = document.querySelector("main");
const divMaterias = document.querySelector(".card__adjacentes");
divMaterias.append(...noticias);

main.append(noticiaPesquisada("3"));

main.append(divMaterias);
