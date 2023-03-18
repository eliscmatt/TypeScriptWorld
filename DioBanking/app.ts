//Classe: dioBanking, plataforma bancária pra determinados users
//attributes: name, accountNumber
//methods: deposit, withdraw

import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/companyAccount';

const peopleAccount = new PeopleAccount(1, 'Chris', 11);
// console.log(peopleAccount);
peopleAccount.deposit();
console.log(peopleAccount.getName);
peopleAccount.setName('Chris Mattos');

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 10);
// console.log(companyAccount);
companyAccount.deposit();
