import { useState, useEffect } from "react";


function Users() {
  const [users, setUsers] = useState([]);
  const usersUrl = "http://localhost:3000/api/v1/users";

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <ul>
      {users.map((user, i) => {
        return (
          <li key={i}>
            <h1>{user.name}</h1>
            <h2>{user.lastName}</h2>
            <h2>{user.email}</h2>
          </li>
        );
      })}
    </ul>
  );
}

export default Users;
