import { CurrentUserLoader } from "./components/current-user-loader";
import {UserInfo} from "./components/user-info"; 
import { UserLoader } from "./components/user-loader";
import { ResourceLoader } from "./components/resource-loader";
import { BookInfo } from "./components/book-info";

function App() {
  return (
    <>
    <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
      <UserInfo/>
    </ResourceLoader>

    <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
      <BookInfo/>
    </ResourceLoader>
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
