export abstract class Account {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  getStatus = (): boolean => {
    return this.status;
  }

  getBalance = (): number => {
    return this.balance;
  }

  deposit = (): number => {
    if (this.validateStatus()) {
      console.log('You deposited');
    }
    return this.deposit();
  }

  yourBalance = (): number => {
    if (this.getBalance() || this.deposit()) {
      this.balance += this.deposit();
    }
    return this.getBalance();
  }

  withdraw = (): void => {
    console.log('You withdrew');
  }

  validWithdraw = (): boolean => {
    if (this.status === true && this.getBalance() > 0) {
      this.withdraw();
    } 
    return true;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error('Invalid account');
  }
}
