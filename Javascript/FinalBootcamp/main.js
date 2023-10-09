
const parentEL = document.querySelector('.crud-article');
const searchInput = document.querySelector('.search')


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
                <p>Name: <span class="name">${user.name}</span></p>
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

export const filterUsers = () => {
    searchInput.addEventListener("input", e => {
        const value = e.target.value
        const searchTerm = value.toLowerCase();
        let nodesToFilter = document.querySelectorAll('.name');
        nodesToFilter.forEach((node) => {
            if(node.textContent.toLowerCase().startsWith(searchTerm)){
                node.parentNode.parentNode.style.display = 'block';
            }else {
                node.parentNode.parentNode.style.display = 'none';
            }
        })
    })         
}

const main = async () => {
    const users = await fetchUsers()
    console.log(users);
    displayUsers(users)
    filterUsers()
}

main();