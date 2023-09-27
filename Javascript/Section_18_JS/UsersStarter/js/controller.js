console.log("TEST");

const showUser = async function() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const dataUser = await res.json();

        if(!res.ok) throw new Error(`${dataUser.message} ${res.status}`)

        let user = dataUser;

        userFinal = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        }
        console.log(userFinal);

        console.log(res, dataUser);
    }catch(err) {
        console.log(err);
    }
}

showUser();