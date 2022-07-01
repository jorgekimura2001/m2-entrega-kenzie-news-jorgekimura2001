export default class CardPrincipal{
    static criarCardPrincipal(materia){
      const divMateria = document.createElement('div');
      const categoria = document.createElement('p');
      const titulo = document.createElement('h1');
      const resumo = document.createElement('p');
      const fonte = document.createElement('span');
      const imagem = document.createElement('img');

      categoria.innerText = `${materia.categoria}`;
      titulo.innerText = `${materia.titulo}`;
      resumo.innerText = `${materia.resumo}`;
      fonte.innerText = `${materia.fonte}`;
      imagem.src = `${materia.imagem}`;
    
      divMateria.append( categoria, titulo, resumo, fonte, imagem);
      return divMateria
    }
}