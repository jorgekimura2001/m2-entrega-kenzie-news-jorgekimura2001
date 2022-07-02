export default class CardPrincipal{
    static criarCardPrincipal(materia){
      
      const divMateriaPrincipal = document.querySelector('.card__principal');
      
      const categoria = document.createElement('span');
      const titulo = document.createElement('h1');
      const resumo = document.createElement('p');
      const fonte = document.createElement('h3');
      const imagem = document.createElement('img');
      
      categoria.innerText = `${materia.categoria}`;
      titulo.innerText = `${h1.innerText}`;
      resumo.innerText = `${p.innerText}`;
      fonte.innerText = `Fonte: ${span.innerText}.`;
      imagem.src = `${img.src}`;
    
      divMateriaPrincipal.append(categoria, titulo, resumo, fonte, imagem);
      return divMateriaPrincipal
    }
}