
const validateWithdrawal = (amount, balance) => {
    return amount > 0 && amount % 500 === 0 && amount + 25 <= balance;
};

const withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance)) {
        balance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
    } 
    else {
        console.log("Invalid Withdrawal!");
    }

    console.log("Remaining Balance: Rs.", balance);
};

withdrawMoney(3000, 10000, validateWithdrawal);
