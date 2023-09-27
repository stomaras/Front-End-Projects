console.log("TEST");

const userContainer = document.querySelector('.user');

const showUser = async function() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/');
        const dataUser = await res.json();

        if(!res.ok) throw new Error(`${dataUser.message} ${res.status}`)

        let users = dataUser;
        console.log(users);

        const usersData = users.slice(0,6);
        console.log(usersData);

        // userFinal = {
        //     id: user.id,
        //     name: user.name,
        //     username: user.username,
        //     email: user.email
        // }
        // console.log(userFinal);

        // console.log(res, dataUser);

        // // renderUser
        // const markUp = `
        //         <h2>${userFinal.name}</h2>
        //         <p>
        //             <span>Name:</span>${userFinal.name}<br/>
        //             <span>Username:</span>${userFinal.username}<br/>
        //             <span>Email:</span>${userFinal.email}<br/>
        //         </p>
        // `
        // userContainer.innerHTML = '';
        // userContainer.insertAdjacentHTML('afterbegin', markUp)
    }catch(err) {
        console.log(err);
    }
}

showUser();