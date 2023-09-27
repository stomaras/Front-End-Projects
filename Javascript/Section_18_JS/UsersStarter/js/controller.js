console.log("TEST");

const userContainer = document.querySelector('.users');
const fetchUsersUrl = "https://jsonplaceholder.typicode.com/users/"
const showUsers = async function() {
    try {
        const res = await fetch(fetchUsersUrl);
        const dataUser = await res.json();

        if(!res.ok) throw new Error(`${dataUser.message} ${res.status}`)

        let users = dataUser;
        console.log(users);

        const usersData = users.slice(0,4);
        usersData.forEach((user) => {
            const markup = `
                <article class="user">
                <h2 class="user__title">${user.name}</h2>
                <p class="user__description">${user.username}</p>
                <ul class="user__address">
                    <li class="user__city">City:${user.address.city}</li>
                    <li class="user__street">Street:${user.address.street}</li>
                </ul> 
                </article>
            `;
            userContainer.insertAdjacentHTML('beforeend', markup);    
        });

    }catch(err) {
        console.log(err);
    }
}

const showUser = async function() {
    try {
        const id = window.location.hash.slice(1);

        if(!id) return;

        const res = await fetch(`${fetchUsersUrl}${id}`);

        const user = await res.json();
        console.log(user);

        const markup = `
            <article class="user">
                <h2 class="user__title">${user.name}</h2>
                <p class="user__description">${user.username}</p>
                <ul class="user__address">
                    <li class="user__city">City:${user.address.city}</li>
                    <li class="user__street">Street:${user.address.street}</li>
                </ul> 
            </article>
        `
        userContainer.innerHTML = '';
        userContainer.insertAdjacentHTML('afterBegin',markup);
    } catch(err){
        alert(err)
    }
}

window.addEventListener('hashchange', showUser);
showUsers();

