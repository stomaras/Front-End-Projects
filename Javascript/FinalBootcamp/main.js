
const parentEL = document.querySelector('.crud-article');

export const fetchUsers = async () => {

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){return;}
        return await response.json();
    }catch(error){
        alert(error);
        return null;
    }
    
}

export const displayUsers = (users) => {
    users.map((user) => {
        const markUp = `
            <article class="user">
                <p>Name: <span>${user.name}</span></p>
                <p>Username: <span>${user.username}</span></p>
                <p>Email: <span>${user.email}</span></p>
                <p>City: <span>${user.address.city}</span></p>
                <p>Zip Code: <span>${user.address.zipcode}</span></p>
                <p>Phone: <span>${user.phone}</span></p>
            </article>
        `

        parentEL.insertAdjacentHTML('afterbegin',markUp)
    })
}

const main = async () => {
    const users = await fetchUsers()
    console.log(users);
    displayUsers(users)
}

main();