const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data with status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  const filterEvenId = (users) => users.filter(({ id }) => !(id % 2));
  
  const createUsersList = (users, list) => {
    users.forEach(({ name }) => {
      list.innerHTML += `<li class="user">${name}</li>`;
    });
  };
  
  const init = async (url, list) => {
    const users = await fetchData(url);
    console.log(users);
    if (users) {
      createUsersList(filterEvenId(users), list);
    }
  };
  
  export default init;
  