

// From this endpoint https://jsonplaceholder.typicode.com/users get the users and show their names in a list in the DOM
// Post to this endpoint https://jsonplaceholder.typicode.com/posts, a user object with properties of title: 'My Post', body: 'My Post' and userId: 2 and log it's responce

const usersUl = document.querySelector('.users__list');

const getUsers = async function() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/');
        const dataUser = await res.json();

        if(!res.ok) throw new Error(`${dataUser.message} ${res.status}`)

        let users = dataUser;
        console.log(users);

        const usersData = users.slice(0,6);
        console.log(usersData);

    }catch(err) {
        console.log(err);
    }
}

getUsers();