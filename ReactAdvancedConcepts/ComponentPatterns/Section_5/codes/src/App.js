import { checkProps } from "./components/check-props";
import { includeUser } from "./components/include-user";
import { UserInfo } from "./components/user-info";

const UserInfoWithUser = includeUser(UserInfo, "2");
const UserInfoWithLoader = includeUser(UserInfo,"3");

function App() {
  return (
    <>
      <UserInfoWithUser />
    </>
  );
}

export default App;
