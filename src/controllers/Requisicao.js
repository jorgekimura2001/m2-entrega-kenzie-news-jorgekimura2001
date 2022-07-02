export default class Requisicao {
    static url = 'https://kenzie-news-api.herokuapp.com/api/news';

    static async pegarDados(){
        const dados = await fetch(Requisicao.url)
        .then(response => response.json())
        return dados
}
}
