export abstract class Account {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name: string): void => {
        this.name = name;
        console.log("Set name with sucess");
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (): void => {
        if(this.validateStatus()) {
            console.log("You deposited");
        }
    }

    withdraw = (): void => {
        console.log("You withdraw");
    }

    getBalance = (): void => {
        console.log(this.balance);
    }

    private validateStatus = (): boolean => {
        if (this.status) return this.status;

        throw new Error('Invalid account');
    }
}