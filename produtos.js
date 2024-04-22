// Classe abstrata Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularPrecoTotal() {
        return this.preco;
    }
}

  // Classes Livro e Eletronico herdam de Produto
class Livro extends Produto {
    constructor(nome, preco, autor) {
        super(nome, preco);
        this.autor = autor;
    }

    calcularPrecoTotal() {
      // Livros têm desconto de 10%
      return this.preco * 0.9;
    }
}
  
class Eletronico extends Produto {
    constructor(nome, preco, garantiaMeses) {
        super(nome, preco);
        this.garantiaMeses = garantiaMeses;
    }
  
    calcularPrecoTotal() {
      // Eletrônicos têm desconto de 5%
      return this.preco * 0.95;
    }
  }
  
  // Criando instâncias de objetos
  let produto = new Produto('Produto Genérico', 100);
  let livro = new Livro('O Senhor dos Anéis', 50, 'J.R.R. Tolkien');
  let eletronico = new Eletronico('Smartphone', 1000, 12);
  
  // Testando os métodos
  console.log(produto.calcularPrecoTotal()); // Saída: 100
  console.log(livro.calcularPrecoTotal()); // Saída: 45 (preço com desconto de 10%)
  console.log(eletronico.calcularPrecoTotal()); // Saída: 950 (preço com desconto de 5%)
  