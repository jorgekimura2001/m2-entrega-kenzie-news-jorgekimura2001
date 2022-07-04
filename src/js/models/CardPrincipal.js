export default class CardPrincipal{
  static criarCardPrincipal(materia) {
    const [img, div] = materia.childNodes;
    const [span, h1, p, h3] = div.childNodes
  
    const divMateriaPrincipal = document.createElement("div");
    divMateriaPrincipal.className = "divMateriaPrincipal";

    const divInfoPrincipal = document.createElement('div');
    divInfoPrincipal.className = "divInfoPrincipal";

    const categoria = document.createElement('span');
    categoria.className = 'categoriaPrincipal';
    const titulo = document.createElement('h1');
    titulo.className = 'tituloPrincipal'
    const resumo = document.createElement('p');
    resumo.className = 'resumoPrincipal'
    const fonte = document.createElement('h3');
    fonte.className = 'fontePrincipal'
  
    const divImagem = document.createElement("div");
    divImagem.className = 'divImagemPrincipal'
    const url = `url(${img.src})`;
    divImagem.style.backgroundImage = url
    categoria.innerText = `${span.innerText}`;
    titulo.innerText = `${h1.innerText}`;
    resumo.innerText = `${p.innerText}`;
    fonte.innerText = `${h3.innerText}`;

    const divMobile = document.createElement('div');
    divMobile.className = 'hidden';
  
    divInfoPrincipal.append(categoria, titulo, resumo, fonte);
    divMateriaPrincipal.append(divInfoPrincipal, divImagem);
    return divMateriaPrincipal
    }
}