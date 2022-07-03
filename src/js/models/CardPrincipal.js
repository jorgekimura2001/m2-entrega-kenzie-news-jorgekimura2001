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
  
    const imagem = document.createElement('img');
    imagem.className = 'imagemPrincipal'
    
    categoria.innerText = `${span.innerText}`;
    titulo.innerText = `${h1.innerText}`;
    resumo.innerText = `${p.innerText}`;
    fonte.innerText = `${h3.innerText}`;
    imagem.src = `${img.src}`;

    divInfoPrincipal.append(categoria, titulo, resumo, fonte);
    divMateriaPrincipal.append(divInfoPrincipal, imagem);
    return divMateriaPrincipal
    }
}