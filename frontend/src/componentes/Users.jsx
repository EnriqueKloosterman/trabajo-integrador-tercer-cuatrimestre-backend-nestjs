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

  // return users data inside a ul
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

  // return (
  //     users.map((user, i) => {
  //         <div key={i}>
  //             <h1>{user.name}</h1>
  //             <h2>{user.email}</h2>
  //             <h3>{user.password}</h3>
  //             <h4>{user.role}</h4>
  //             <h5>{user.createdAt}</h5>
  //             <h6>{user.updatedAt}</h6>
  //         </div>
  //     })
  // )
}

export default Users;
