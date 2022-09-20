//Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.
class ContaBancaria{
 nome: string;
 idade: number;
 sexo: string;
 signo: string;

 constructor(nome: string, idade: number, sexo: string, signo:  string) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.signo = signo;
}
infoconta(): void{
    console.log("nome: "+ this.nome + "\nidade: "+ this.idade + "\nsexo: "+ this.sexo + "\nsigno: " + this.signo);
}
}
let contabancaria = new ContaBancaria("ana",9,"feminino","barbie")
contabancaria.infoconta();