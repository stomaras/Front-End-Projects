
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


// const start = () => {
//     const users = fetchUsers();

//     console.log(users)
// }

// export default start;
