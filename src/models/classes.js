export default class app {
   static async requisicao(){
   
        await fetch('https://kenzie-news-api.herokuapp.com/api/news')
        .then(response => response.json())
        .then((data)=> {
           // console.log(data)
            data.forEach(element => app.template(element));
            //AQUI VOCÊ PODE FAZER UM LOOP PARA PEGAR TODAS AS NOTÍCIAS
            //FAZER A CRIAÇÃO DO TEMPLATE
            
        })
    
    }
    static template(materia){
        const main = document.querySelector('main')
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
    
      divMateria.append(categoria, titulo, resumo, fonte, imagem);
      main.append(divMateria)
    }    
}