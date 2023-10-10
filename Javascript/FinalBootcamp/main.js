
const parentEL = document.querySelector('.crud-article');
const searchInput = document.querySelector('.search');
const searchButton = document.querySelector('.sort');
const submitBtn = document.querySelector('#submit');
const usersForm = document.forms;
const form = document.getElementById('usersForm');

// Form inputs
const nameInput = document.getElementById('name');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const cityInput = document.getElementById('city');
const zipCodeInput = document.getElementById('zip-code');
const phoneInput = document.getElementById('phone');

// Paragraphs which containers errors
const errorParagraphName = document.querySelector('#name-error');
const errorParagraphUsername = document.querySelector('#username-error');
const errorParaEmail = document.querySelector('#email-error');
const cityParaError = document.querySelector('#city-error');
const zipParaError = document.querySelector('#zip-code-error');
const phoneParaError = document.querySelector('#phone-error');

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

const resetInputFields = () => {
    nameInput.value = "";
    usernameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    cityInput.value = "";
    zipCodeInput.value = "";
    phoneInput.value = "";
}

const validateValues = (values) => {
    const {name, username, email, city, zip, phone} = values;
    let isNameError = false;
    let isUsernameError = false;
    let isEmailError = false;
    let isCityError = false;
    let isZipError = false;
    let isPhoneError = false;

    const isZipValid = Number(zip);
    console.log(isZipValid);
    if(name.length <=5){
        nameInput.classList.add("invalid");
        errorParagraphName.innerHTML = "Name should be more than 5 characters long";
    }
    if(name.length > 5){
        isNameError = true;
        nameInput.classList.remove('invalid');
        errorParagraphName.innerHTML = "";
    }
    if(username.length <= 5){
        usernameInput.classList.add("invalid");
        errorParagraphUsername.innerHTML = " Username should be more than 5 characters long";
    }
    if(username.length > 5){
        isUsernameError = true;
        usernameInput.classList.remove("invalid");
        errorParagraphUsername.innerHTML = "";
    }
    if(!email.includes("@")){
        emailInput.classList.add('invalid');
        errorParaEmail.innerHTML = "Email should include a @";
    }
    if(email.includes("@")){
        isEmailError = true;
        emailInput.classList.remove('invalid');
        errorParaEmail.innerHTML = "";
    }
    if(city.length < 2){
        cityInput.classList.add('invalid');
        cityParaError.innerHTML = "You must add a city";
    }
    if(city.length >=2){
        isCityError = true;
        cityInput.classList.remove('invalid');
        cityParaError.innerHTML = "";
    }
    if(isNaN(Number(zip)) || zip.length < 4){
        console.log("nannn");
        zipCodeInput.classList.add('invalid');
        zipParaError.innerHTML = "Zip code must be a number"
    }else {
        isZipError = true;
        zipCodeInput.classList.remove('invalid');
        zipParaError.innerHTML = "";
    }

    if(isNaN(Number(phone)) || phone.length !== 10){
        phoneInput.classList.add('invalid');
        phoneParaError.innerHTML = 'Phone must be valid'
    }else {
        isPhoneError = true;
        phoneInput.classList.remove('invalid');
        phoneParaError.innerHTML = '';
    }


    
    if(isNameError && isUsernameError && isEmailError && isCityError && isZipError && isPhoneError){
        return true;
    }else {
        return false;
    }

    
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const values = generateValues(formData);
    if(validateValues(values)){
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
        users.unshift(newUser);
        const usersArticle = document.querySelectorAll('.user');
        usersArticle.forEach((el) => {
            el.style.display = 'none';
        })
        displayUsers(users)
        resetInputFields();
    }else {
        resetInputFields();
    }


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