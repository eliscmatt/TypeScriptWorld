import { Account } from   "./Account";

export class BonusAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    depositMethode = (bonus: number = 10): void => {
        if(this.deposit()) {
            bonus += this.deposit();
        }
    }
}