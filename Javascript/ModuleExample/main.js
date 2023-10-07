import displayUsers from "./displayUsers";

const usersList = document.getElementById("usersList");
const usersUrl = "https://jsonplaceholder.typicode.com/users";

displayUsers(usersUrl, usersList);
