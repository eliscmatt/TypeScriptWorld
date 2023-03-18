// aqui passamos o tipo, assim não dá brecha pra entrada de outros
const soma = (a: number, b: number) =>  {
    console.log(a + b);
}
soma(1, 2);

///////////////////////////////////////////////////////////////////

//precisa declarar os tipos
let b: string = 'b';
let n: number = 2;
let x: boolean = false;

// //pode ter uma variável que recebe uma string como valor numérico, não ideal:
// //quando abre o escopo da variável pra receber mais de um tipo de valor, nem precisa usar TS
let m: string | number = 2;
m = 'Chris'
// m = false

///////////////////////////////////////////////////////////////////

//declare object interface
interface Person {
    name: string,
    age: number,
    like?: string, 
}
const person: Person = {
    name: 'Chris',
    age: 19,
}
const otherPerson: Person = {
    name: 'Makot',
    age: 19,
    like: 'Dev',
}

//do tipo array, declaramos que vai receber objetos, sinalizando seu tipo, assim recebemos um array e dentro do array vamos receber objetos do tipo Person:
const arrayPerson: Person[] = [
    person,
    otherPerson,
]
// mesma coisa de:
const arrayArrayPerson: Array<Person> = [
    person,
    otherPerson,
]

const arrayNum: number[] = [1, 2, 3];
const arrayString: Array<string> = ['1', '2', '3'];

//Em TypeScript, "String" com "S" maiúsculo é uma interface que envolve um valor primitivo string. Já "string" com "s" minúsculo é o tipo primitivo para representar uma cadeia de caracteres.

//////////////////////////////////////////////////////////////////

//objetos literais: relação chave e valor, pode usar pra construir uma estrutura de decisão dentro de uma função
const typeUser = {
    admin: 'Welcome admin!',
    student: 'Welcome, come on study!',
    viewer: 'Be a user!',
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser]);
    // dando console.log no objeto typeUser, acessando a propriedade, dizendo que é uma chame do tipo do objeto que estruturamos 'as keyof typeof'
}

const user = 'admin';
validateUser(user);
validateUser('student');
validateUser('viewer');

////////////////////////////////////////////////////////////////

//podemos tipar um array pra receber qualquer coisa, mas o melhor são utilizar específicos
const array: Array<any> = [1, '2', false];

const array2: Array<string> = ['a', 'b', '3', '4', 'e'];
const array3: string[] = ['a', 'b', '3', '4', 'e'];
console.log(array2[0]);

////////////////////////////////////////////////////////////////

class User {
    name: string = 'nameUser'
    age: number = 0

    //método contrutor explícito
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showName = () => {
        console.log(this.name);
    }
}

const user2: User = new User('1', 1);
user2.showName();

/////////////////////////////////////////////////

// class Admin extends Account {
//     balance: number

//     //precisa chamar o superconstrutor pra definir atributos/métodos da classe pai com 'super', classe derivada(Admin)
//     constructor(name: string, accountNumber: number) {
//         super(name, accountNumber)
//         this.balance = 20;
//     }

//     getValue = () => {
//         console.log(this.balance);
//     }
// }

// const adminAccount: Admin = new Admin('Madoc', 2000);
// console.log(adminAccount);

//////////////////////////////////////////////////

//classes abstratas: classes que servem de modelo para outras classes e não podem ser usadas para instanciar objetos

// abstract class Pattern {};

//////////////////////////////////////////////////

//Polimorfismo
//assinatura do método é o tipo de retorno, e pode ser alterada

//aqui alteramos o método original, pra mudar a mensagem quando se tratar de uma empresa
// deposit = (): void => {
//     console.log("The enterprise deposited");
// }

////////////////////////////////////////////////

// métodos setters: configuram o valor de uma propriedade
// setName = (name: string): void => {
//     this.name = name;
//     console.log("Set name with sucess");
// }

// métodos getters: pegar valor de propriedade privada
// getLoan = (): void => {
//     console.log("You get a loan");
// }

////////////////////////////////////////////////

// validação interna
// private validateStatus = (): boolean => {
//     if (this.status) return this.status;

//     throw new Error('Invalid account');
// }

///////////////////////////////////////////////

// readonly permite apenas leitura, sem que altere o valor após ser intanciado
//DRY and single/unique responsability pratices