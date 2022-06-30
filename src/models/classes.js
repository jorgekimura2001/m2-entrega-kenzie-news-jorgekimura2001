class app {

    static requisicao(){
    
        fetch('https://kenzie-news-api.herokuapp.com/api/news')
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            data.forEach(element => {
                console.log(element)
            });
            //AQUI VOCÊ PODE FAZER UM LOOP PARA PEGAR TODAS AS NOTÍCIAS
            //FAZER A CRIAÇÃO DO TEMPLATE
            
        })
    
    }
    
    static template(){
      
      return
    }
    
    }
app.requisicao()