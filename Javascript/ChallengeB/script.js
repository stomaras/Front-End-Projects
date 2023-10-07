/* 
Using async and await get the users from 
https://jsonplaceholder.typicode.com/users
and show the names of the users that have an even id in a list
*/

const containerElement = document.getElementById('list')
const fetchUsers = async() => {
    
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!res.ok)
            return;

        const data = await res.json();

        const evenUsers = data.filter(user => user.id % 2 === 0);
        const evenUsersNames= evenUsers.map(user => user.name);

        evenUsersNames.forEach(element => {
            const list = `<li>${element}</li>`
            containerElement.insertAdjacentHTML('beforeend', list)
        });
}

fetchUsers()