// Program to create personAccount object

var personAccount = {
    firstName: "Purnima",
    lastName: "Chaulagain",

    incomes: [
        { description: "Salary", amount: 30000 },
        { description: "Freelance", amount: 10000 }
    ],

    expenses: [
        { description: "Food", amount: 5000 },
        { description: "Transport", amount: 3000 }
    ],

    totalIncome: function() {
        var total = 0;

        for (var i = 0; i < this.incomes.length; i++) {
            total += this.incomes[i].amount;
        }

        return total;
    },

    totalExpense: function() {
        var total = 0;

        for (var i = 0; i < this.expenses.length; i++) {
            total += this.expenses[i].amount;
        }

        return total;
    },

    accountInfo: function() {
        return this.firstName + " " + this.lastName;
    },

    addIncome: function(description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        });
    },

    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },

    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

// Display information
console.log("Account Holder:", personAccount.accountInfo());
console.log("Total Income:", personAccount.totalIncome());
console.log("Total Expense:", personAccount.totalExpense());

personAccount.addIncome("Bonus", 5000);
personAccount.addExpense("Shopping", 2000);

console.log("Total Income after adding:", personAccount.totalIncome());
console.log("Total Expense after adding:", personAccount.totalExpense());
console.log("Account Balance:", personAccount.accountBalance());