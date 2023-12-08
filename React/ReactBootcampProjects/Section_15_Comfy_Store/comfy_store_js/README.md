- https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi

Base Url: https://strapi-store-server.onrender.com/api/products

#### Set Up Fetch Data 

- go on Routers 

set up the pages 

swr react for data fetching

Array.from({ length: number }, (_, index) => {...}): This part uses the Array.from
method to create an array of a specific length, determined by the number parameter.
The second argument of the Array.from method is a callback function that will be invoked
for each element in the array. The underscore (_) is a placeholder for the current element
(which we do not need in this case), and index si the index of the current element.


export const generateAmountOptions = (number) => {
    return Array.from({length:number}, (_,index) => {
        const amount = index + 1;

        return (
            <option key={amount} value={amount}>
                {amount}
            </option>
        )
    });
};