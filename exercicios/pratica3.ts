//Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Paciente{
nome: string;
sexo: string;
idade: number;
doenca:string;

constructor(nome: string, sexo: string, idade: number,doenca: string){
this.nome = nome;
this.sexo = sexo;
this.idade = idade;
this.doenca = doenca;
}

FichaPaciente(): void{
    console.log("nome: "+ this.nome+"\nsexo: " + this.sexo + "\nidade: " + this.idade+"\ndoenca: " + this.doenca);
}
}
let paciente = new Paciente("tonya","feminino",86,"gota");
paciente.FichaPaciente()