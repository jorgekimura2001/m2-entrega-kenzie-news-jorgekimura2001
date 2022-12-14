export default class Cards {

    static criarCards(materia){
      const divMateriasConteudo = document.createElement('div')
      divMateriasConteudo.className = 'cardSecundario__div'
      divMateriasConteudo.id = materia.id;

      const divConteudo = document.createElement('div');
      divConteudo.className = 'divMateriasConteudo'
      divConteudo.id = materia.id
      const categoria = document.createElement('span');
      categoria.classList.add('card__categoria')
      const titulo = document.createElement('h1');
      titulo.className = 'card__titulo'
      const resumo = document.createElement('p');
      resumo.className = 'card__resumo'
      const fonte = document.createElement('h3');
      fonte.className = 'card__fonte'
      
      const imagem = document.createElement('img');
      imagem.className = 'cardSecundario__imagem'

      categoria.innerText = `${materia.categoria}`;
      titulo.innerText = `${materia.titulo}`;
      resumo.innerText = `${materia.resumo}`;
      fonte.innerText = `Fonte: ${materia.fonte}.`;
      imagem.src = `${materia.imagem}`;

      divConteudo.append(categoria, titulo, resumo, fonte);
      divMateriasConteudo.append(imagem, divConteudo);
      return divMateriasConteudo;
    }    
}