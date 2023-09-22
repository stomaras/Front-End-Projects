// Exporting Module
console.log('Exporting module');

// Blocking code 
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');

export const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}


const totalPrice = 234;
const totalQuantity = 23;

export {totalPrice, totalQuantity};

export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

// console.log('Start fetching');
// // top-level await on modules
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);

// console.log('Something');



const getLastTop = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return {title: data.at(-1).title, text: data.at(-1).body}
}

// Pending Promise
const lastPost = getLastTop();
console.log(lastPost);

// Get Regular Data after sometime not very clean so use top level await
lastPost.then(last => console.log(last))

// Use top level async await
const lastPost2 = await getLastTop();
console.log(lastPost2);

// useing top level await will block the entire module

