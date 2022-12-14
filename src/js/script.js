import { noticias } from "./controllers/criacaoCards.js";
import { noticiaPesquisada } from "./controllers/criacaoCards.js";

const main = document.querySelector("main");
export const divPrincipal = document.querySelector(".card__principal");
divPrincipal.append(noticiaPesquisada())
export const divMaterias = document.querySelector(".card__adjacentes");
divMaterias.append(...noticias);

main.append(divPrincipal, divMaterias);