import { Account } from "./Account"

export class CompanyAccount extends Account {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  validateLoan = (): boolean => {
    if (this.getStatus()) console.log('isValid')
    return true;
  }

  getLoan = (): number => {
    if (this.validateLoan()) {
      if(this.getLoan()) {
        console.log('Voce pegou um empréstimo')
      }
    }
    return this.getLoan();
  }

  hasLoan = (): number => {
    if (this.getLoan()) {
      let seeBalance = this.getBalance();
      seeBalance += this.getLoan();
    }
    return this.getBalance();
  }
}
