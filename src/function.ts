
// Normal Function
// Arrow function


function add(firstNumber: number, secondNumber: number): number{
    return firstNumber + secondNumber;
};


const addArrow = (firstNumber: number, secondNumber: number): number =>{
    return firstNumber + secondNumber;
}

// Object --> function ---> method

const balanceInfo = {
    userName: "Nurullah", 
    balance: 0,
    addBalance(amount: number): string{
        return `Your New Balance is ${this.balance + amount}`
    } // This is method property
}