import { CurrentUserLoader } from "./components/current-user-loader";
import {UserInfo} from "./components/user-info"; 
import { UserLoader } from "./components/user-loader";
import { ResourceLoader } from "./components/resource-loader";
import { BookInfo } from "./components/book-info";
import { DataSource } from "./components/data-source";
import axios from "axios";
import { DataSourceWithRender } from "./components/data-source-with-render";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

const getDataFromLocalStorage = key => () => {
  return localStorage.getItem(key);
}

function App() {
  return (
    <>
    <DataSource getData={async()=> getDataFromServer("/users/1")}
      resourceName={"user"}
    >
      <UserInfo/>
    </DataSource>
    {/* <DataSourceWithRender getData={async()=> getDataFromServer("/users/1")}
    render={(resource) => <UserInfo user={resource}/>}
    >
    </DataSourceWithRender> */}
    {/* <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
      <UserInfo/>
    </ResourceLoader>

    <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
      <BookInfo/>
    </ResourceLoader> */}
      {/* <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader>

      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>

      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader> */}
    </>
  );
}

export default App;
