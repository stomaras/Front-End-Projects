// for all models 

export const state = {
    users: [],
};

const fetchUsersUrl = "https://jsonplaceholder.typicode.com/users/"

export const loadUsers = async function() {

    try {
        const res = await fetch(fetchUsersUrl);
        const users = await res.json();
    
        if(!res.ok) throw new Error(`${dataUser.message} ${res.status}`)
        
        const { allUsers } = users
        state.users = allUsers
    } catch(err){
        alert(err);
    }

}