
const parentEL = document.querySelector('.crud-article');
const searchInput = document.querySelector('.search');
const searchButton = document.querySelector('.sort');
const submitBtn = document.querySelector('#submit');
const usersForm = document.forms;
const form = document.getElementById('usersForm');

const {
    name,
    username,
    email,
    city,
    zip,
    phone
} = usersForm;

const generateValues = (formData) => {
    return {
        name: formData.get('name'),
        username: formData.get("username"),
        email: formData.get("email"),
        city: formData.get("city"),
        zip: formData.get('zip'),
        phone: formData.get("phone")
    };
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(formData);
    const values = generateValues(formData);
    console.log(values);
    // validate values or add values on users array an rerender again;
    const users = await fetchUsers();
    const newUser = {
        name: values.name,
        username: values.username,
        email: values.email,
        phone: values.phone,
        address:{
            zipcode: values.zipcode,
            city: values.city,
        }
    }
    users.push(newUser);
    console.log(users);
    const usersArticle = document.querySelectorAll('.user');
    usersArticle.forEach((el) => {
        el.style.display = 'none';
    })
    displayUsers(users)
    // console.log(usersArticle);
    // displayUsers(users);

})



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
        `;
        parentEL.insertAdjacentHTML('afterbegin',markUp)
    });
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

const submitForm = (e) => {
    e.preventDefault();
}

const main = async () => {
    const users = await fetchUsers()
    console.log(users);

    displayUsers(users)
    filterUsers()
}

main();