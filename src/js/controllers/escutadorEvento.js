import { divMaterias } from "../script.js";

import { divPrincipal } from "../script.js";

import { noticiaPesquisada } from "./criacaoCards.js";

divMaterias.addEventListener('click', (evt) => {
    const alvo = evt.target
    if (alvo.tagName === 'DIV') {
        divPrincipal.innerHTML = ""
        const result = noticiaPesquisada(alvo.id)
        divPrincipal.append(result)
    } else {
        const divPai = alvo.closest('div');
        divPrincipal.innerHTML = '';
        const novoCard = noticiaPesquisada(divPai.id)
        divPrincipal.append(novoCard)
    }
})