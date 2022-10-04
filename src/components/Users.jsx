import { useEffect, useState } from "react";

import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoadding, setIsLoadding] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
   
      
      .then((res) => setUsers(res.data))

      .catch((e) => console.log(e))
      .finally(()=> setIsLoadding(false))
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {isLoadding && <div>Loadding..</div>}

      {users.map((user) => (
        <div key={user.id}>
          {user.name} {user.username}
        </div>
      ))}
    </div>
  );
}
export default Users;
