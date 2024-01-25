class BankAccount {
    #accountNumber;
    #balance;
    constructor(accountNumber, balance) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  
    getAccountInfo() {
      return `Conta ${this.#accountNumber}: saldo = R$ ${this.#balance.toFixed(2)}`;
    }
  }
  
  const myAccount = new BankAccount("123456789", 1000);
  myAccount.deposit(500);
  myAccount.withdraw(200);
  
  console.log(myAccount.getAccountInfo()); // Saída: "Conta 123456789: saldo = R$ 1300.00"
  