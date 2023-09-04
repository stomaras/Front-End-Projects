/**
 * 1. Log how many miliseconds ellapese since 1,1, 1970 from now
 */

const ms = Date.now();

console.log(ms);

/**
 * 2. You get a date from the server
 * 'Wed Feb 01 2023 18:16:27 GMT+0200 (Eastern European Standard Time)'
 *  Log how many miliseconds since 1,1 1970
 */

const date = new Date(
  "Wed Feb 01 2023 18:16:27 GMT+0200 (Eastern European Standard Time)"
);
const millisecondsSince1970 = date.getTime();

console.log(millisecondsSince1970);

/**
 * 3. You get a date from the server
 * 'Wed Feb 01 2023 18:16:27 GMT+0200 (Eastern European Standard Time)'
 *  Log how many miliseconds since 1,1 1970 in UTC
 */

/**
 * 4. Create a date base on this info
 * 628021800000 milliseconds
 */

console.log(new Date(628021800000).toString());

/**
 * 5. Output the of this moment in this format
 * Tue May 12 2020
 */

const newDate = new Date(2020, 4, 12);
console.log(newDate.toString().split(" ").slice(0, 4).join(" "));

/**
 * 6. Output the of this moment in this format
 * 5/12/2020, 6:50:21 PM
 */

const date2020 = new Date(2020, 11, 5);

console.log(
  `${
    date2020.getMonth() + 1
  }/${date2020.getDate()}/${date2020.getFullYear()}, ${date2020.toLocaleTimeString()}`
);

/**
 * 7. Output the of this moment in this format
 * 5/12/2020
 */

console.log(
  `${date2020.getMonth() + 1}/${date2020.getDate()}/${date2020.getFullYear()}`
);

/**
 * 8. You have 2 dates, 19-12-2022 and 22-12-2022
 * What is the difference of the 2 in seconds?
 */

const date1 = new Date(2022, 11, 19);
const date2 = new Date(2022, 11, 22);

console.log(date2.getTime() - date1.getTime());
