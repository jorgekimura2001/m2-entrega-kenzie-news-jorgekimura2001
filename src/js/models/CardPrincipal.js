export default class CardPrincipal{
  static criarCardPrincipal(materia) {
    const [img, span, h1, p, h3 ] = materia.childNodes;
  
    const divMateriaPrincipal = document.createElement("div");
    const categoria = document.createElement('span');
    const titulo = document.createElement('h1');
    const resumo = document.createElement('p');
    const fonte = document.createElement('h3');
    const imagem = document.createElement('img');
      
    categoria.innerText = `${span.innerText}`;
    titulo.innerText = `${h1.innerText}`;
    resumo.innerText = `${p.innerText}`;
    fonte.innerText = `${h3.innerText}`;
    imagem.src = `${img.src}`;

    divMateriaPrincipal.append(categoria, titulo, resumo, fonte, imagem);
    return divMateriaPrincipal
    }
}