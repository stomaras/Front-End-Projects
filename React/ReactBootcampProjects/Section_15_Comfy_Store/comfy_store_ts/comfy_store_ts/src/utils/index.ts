import axios from "axios";


const productionURL = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL:productionURL,
});

export const formatPrice = (price:string) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD'
    }).format((Number(price) / 100))
    return dollarsAmount;
};
