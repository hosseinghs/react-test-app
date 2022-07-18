import { useState } from "react";
import AddUser from "./components/User/Add";
import UserList from "./components/User/List";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (user) => {
    setUsers((pervState) => [...pervState, user]);
  };

  return (
    <div className="App w-1/2 mx-auto">
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
