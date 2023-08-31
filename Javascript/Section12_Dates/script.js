'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-08-30T21:31:17.178Z',
    '2023-08-29T07:42:02.383Z',
    '2023-08-26T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2023-08-30T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = (date, locale) => {

  const calcDaysPassed = (date1, date2) => 
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  
  const daysPassed = calcDaysPassed(new Date(), date)
  console.log(`days passed : ${daysPassed}`);
  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed < 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
  }
}

const formatCurrency = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);

}

const displayMovements = function (acc, sort = true) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMovement = formatCurrency(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedMovement = formatCurrency(acc.balance, acc.locale, acc.currency);
  labelBalance.textContent = formattedMovement;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(acc.balance, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(acc.balance, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(acc.balance, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

const noewDate = new Date();
const day = `${noewDate.getDate()}`.padStart(2, 0);
const month = `${noewDate.getMonth() + 1}`.padStart(2, 0);
const year = noewDate.getFullYear();
const hour = noewDate.getHours();
const minutes = `${noewDate.getMinutes()}`.padStart(2, 0);

labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

// day/month/year

const no = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day:'numeric',
  month:'long',
  year:'numeric',
  weekday: 'long'
}
const locale = navigator.language
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(no);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current Date and time
    const no = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day:'numeric',
      month:'numeric',
      year:'numeric',
      // weekday: 'long'
    }
    const locale = navigator.language
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(no);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add loan Date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);
// // Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333
// // Binary base 2 - 0 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Convert strings to numbers with Number function or + 
// console.log(Number('23'));
// console.log(+'23');


// // Parsing
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('e23'));

// console.log(Number.parseInt(' 2.5rem '));

// // Note 
// // parseFloat used when you want to get the number out of this string many cases for css properties and values.
// console.log(Number.parseFloat(' 2.5rem '));

// // isNaN function = is not a number

// console.log(Number.isNaN(20));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN('ded'));
// console.log(Number.isNaN(23 / 0));

// // Checking if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));

// console.log(Number.isFinite(23 / 0));


// // Math and Rounding 
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// console.log(Math.max(5, 2, 34, 34,32, 43));

// console.log(Math.trunc(Math.random() * 6) + 1);

// // function which give a value between min and max
// const randomInt = (min, max) => Math.floor(Math.random() * (max-min) + 1) + min;

// console.log(randomInt(10,20));

// // Rounding Integers 
// console.log(Math.trunc(23.2));

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// // round up into 24
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// // round down to 23
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// // Rounding decimals
// // toFixed return string not number
// // with plus in front we convert a string to a number
// console.log((2.8).toFixed(1));
// console.log(+(2.345).toFixed(2));

// // The Remainder Operator

// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1
// console.log(8 % 3);
// console.log(8 / 3);

// const isEven = n => n % 2 === 0;
// console.log(`is even number: ${isEven(8)}`);
// console.log(`is even number: ${isEven(23)}`);

// // if you need to do something every nth time is good idea to use remainder operator for that

// labelBalance.addEventListener('click', () => {

//   [...document.querySelectorAll('.movements__row')].forEach((cur, i) => {
//     if(i % 2 === 0){
//       cur.style.backgroundColor = 'orangered';
//     } else {
//       cur.style.backgroundColor = 'blue';
//     }
//   });
// });

// /* BigInt */
// console.log(2 ** 52 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(4886673589723827892942348239n);
// console.log(BigInt(4886673589723827892942348239));

// // Operations
// console.log(10000n + 10000n);
// console.log(3546756756766474575674676575n * 100000000n);

// const huge = 20034233233453452343453454334344554n;
// const num = 23;
// console.log(huge * BigInt(num));

// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == '20');

// console.log(huge + ' is really big');

// // Divisions
// console.log(10n / 3n);
// console.log(10 / 3);

// // Dates and Times 
// const now = new Date();
// console.log(now);

// console.log(new Date('Wed Aug 30 2023 11:39:49'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// // Working with dates 
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(231232423424));

// future.setFullYear(2040);
// console.log(future);
// console.log(+future);


// const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(`days : ${days1}`);

// currency = E, $

const num = 28884764.23;
const optionss = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
}



console.log('US:    ',new Intl.NumberFormat('en-US', optionss).format(num));
console.log('Germany:    ',new Intl.NumberFormat('de-DE', optionss).format(num));
console.log('Syria:    ',new Intl.NumberFormat('ar-SY', optionss).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, optionss).format(num));

































