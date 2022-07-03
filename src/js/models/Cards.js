export default class Cards {

    static criarCards(materia){
      const divMateriasConteudo = document.createElement('div')
      divMateriasConteudo.id = materia.id;
      const categoria = document.createElement('span');
      categoria.classList.add('card__categoria')
      const titulo = document.createElement('h1');
      const resumo = document.createElement('p');
      const fonte = document.createElement('h3');
      const imagem = document.createElement('img');

      categoria.innerText = `${materia.categoria}`;
      titulo.innerText = `${materia.titulo}`;
      resumo.innerText = `${materia.resumo}`;
      fonte.innerText = `Fonte: ${materia.fonte}.`;
      imagem.src = `${materia.imagem}`;
      
      divMateriasConteudo.append(imagem, categoria, titulo, resumo, fonte);
      return divMateriasConteudo;
    }    
}