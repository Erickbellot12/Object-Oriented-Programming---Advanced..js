//Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Patinete {
    marca: string;
    rodas: number;
    turbo: boolean;
    cor: string;
    constructor(marca: string,rodas: number,turbo: boolean, cor: string) { 
        this.marca = marca;
        this.rodas = rodas; 
        this.turbo = turbo;
        this.cor = cor;
    }
    detalhesDoPatinete(): void {
        console.log("marca: "+ this.marca+ "\nrodas: "+ this.rodas+ "\nturbo: "+ this.turbo+ "\ncor: "+ this.cor);
    }
}
let patinete = new Patinete("bmw",15,true,"transparente")
patinete.detalhesDoPatinete();