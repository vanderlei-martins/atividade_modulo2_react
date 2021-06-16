export default class Helpers_Prateleiras{

    static STATUS_READ = "read";
    static STATUS_CURRENTLYREADING = "currentlyReading";
    static STATUS_WANTOREAD = "wantToRead";

    static organizarLivrosEmPrateleiras(livros){
        let prateleiras = [];
        let objPrateleiraConcluido = new Modelo_Prateleira("Terminei de ler");
        let objPrateleiraLendoAtualmente = new Modelo_Prateleira("Lendo atualmente");
        let objPrateleiraQueroLer = new Modelo_Prateleira("Quero Ler");

        livros.map((livro) => {
            switch (livro.shelf) {
                case this.STATUS_READ:
                    objPrateleiraConcluido.adicionarLivro(livro);
                    break;
                case this.STATUS_CURRENTLYREADING:
                    objPrateleiraLendoAtualmente.adicionarLivro(livro);
                    break;
                default:
                    objPrateleiraQueroLer.adicionarLivro(livro);
                    break;
            }
        });
    
        prateleiras.push(objPrateleiraConcluido);
        prateleiras.push(objPrateleiraLendoAtualmente);
        prateleiras.push(objPrateleiraQueroLer);
    
        return prateleiras;
    
    }

}

export class Prateleira{
    constructor(livros){
        this.livros = livros;
    }
}

class Modelo_Prateleira{
    constructor(nome){
        this.nome = nome;
        this._livros = [];
    }

    adicionarLivro(livro){
        this._livros.push(livro)
    }

    get books(){
        return this._livros; 
    }
}

