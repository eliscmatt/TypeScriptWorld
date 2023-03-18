import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(20, 'Alef', 1);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('Leon', 2);
console.log(companyAccount);

const bonusAccount: BonusAccount = new BonusAccount('Lisa', 3);
console.log(bonusAccount);