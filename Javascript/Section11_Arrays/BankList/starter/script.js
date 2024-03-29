'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


/* Helper Methods */

const transferMoneyCheck = (amount, receiverAccount, currentAccount) => {
  return (amount > 0 && receiverAccount && currentAccount.balance >= amount && receiverAccount?.username !== currentAccount.username);
}

const checkForLoanAmount = (amount, currentAccount) => {
  return (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)); 
}


const checkCloseAmountFieldsValidity = (currentAccount, inputCloseUsername) => {
  return (currentAccount.username === inputCloseUsername.value) && (currentAccount.pin === Number(inputClosePin.value))
}

/* Helper Methods End */


const displayMovements = (movements, sort=false) => {

  containerMovements.innerHTML = '';

  // with slice we create a copy of the array 
  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

  movs.forEach((movement,i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

      const html = `<div class="movements__row">
                      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                      <div class="movements__value">${movement} euro</div>
                    </div>`;
      
      containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}


const calcPrintBalance = (acc) => {
  // add balance property into account object
  // all these references hit on object on the memory heap
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};


const calcDisplaySummary = (account) => {
  const incomes = account.movements.filter((mov) => mov > 0).reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes} euro`;

  const outComes = account.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov,0);
  labelSumOut.textContent = `${Math.abs(outComes)} euro`;

  const interest = account.movements
    .filter((mov => mov > 0))
    .map(deposit => deposit * account.interestRate / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

    labelSumInterest.textContent = `${interest} euro`;
}

const user = 'Steven Thomas Williams';
let usernames = [];
const createUsernames = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
}

// Event Handler
let currentAccount;

/* In HTML the default behaviour is for the page to reload 
   values from input are string so we convert them into numbers 
*/
createUsernames(accounts);

const updateUI = (acc) => {
  // Display movements
  displayMovements(acc.movements);
    
  // Display balance
  calcPrintBalance(acc);
        
  // Display summary
  calcDisplaySummary(acc);
}

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();


  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  }
});



btnTransfer.addEventListener('click', (e) => {
  // preventing reloading on form 
  e.preventDefault();

  // Convert from string to Number from input field
  const amount = Number(inputTransferAmount.value);

  // find the account which we want to transfer money the account which has do login now 
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value); 

  // clear input fields of TransferTo Form
  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  // add negative movement to the current user 

  // add positive movement to the receiver
  
  // check if the amount is + number , check if jonas has enough money, check that you do not send money on your own account , check if receiver account exists

  if(transferMoneyCheck(amount, receiverAccount, currentAccount)){
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

/* the some method will become helpful for this loan feature because our bank has a rule 
   which says that it only grants a loan if there is at least one deposit with at least 10% of the requested loan amount
*/


btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(checkForLoanAmount(amount, currentAccount)){
    // add positive movement to the current data 
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    console.log("Invalid amount");
  }

  // clear input field;
  inputLoanAmount.value = '';
})


btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  /* check if credentials are correct username and pin */
  if(checkCloseAmountFieldsValidity(currentAccount, inputCloseUsername)){

    // Delete user with the specified index
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index,1);
    console.log(`Account ${index}: deleted!`);

    // Hide UI
    containerApp.style.opacity = 0;    
  }

  // clear fields
  inputCloseUsername.value = inputClosePin.value = '';
});


let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})











/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
