export default class CardPrincipal{
    static criarCardPrincipal(materia){
      
      const materiaPrincipal = [...materia.childNodes]
      const [img, span, h1, p, h3] = materiaPrincipal
      console.dir(span)
      const divMateria = document.createElement('div');
      const categoria = document.createElement('h3');
      const titulo = document.createElement('h1');
      const resumo = document.createElement('p');
      const fonte = document.createElement('span');
      const imagem = document.createElement('img');

      categoria.innerText = `${h3.innerText}`;
      console.dir(h3)
      console.log(categoria)
      titulo.innerText = `${h1.innerText}`;
      resumo.innerText = `${p.innerText}`;
      fonte.innerText = `Fonte: ${span.innerText}.`;
      imagem.src = `${img.src}`;
    
      divMateria.append(categoria, titulo, resumo, fonte, imagem);
      return divMateria
    }
}