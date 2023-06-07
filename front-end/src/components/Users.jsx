import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  const client = axios.create({
    baseURL: "http://localhost:7000/api/users",
  });

  const getAllUsers = async () => {
    const response = await client.get("");
    if (response.status === 200) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    getAllUsers();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Users">
      <form
        action="submit"
        className="form-harsh-pwd"
        onSubmit={() => handleSubmit()}
      >
        <input type="email" className="email" placeholder="Your email" />
        <input type="password" className="password" placeholder="Password" />
      </form>

      <div className="usersList">
        {users.map((user) => (
          <div className="users-div" key={user.id}>
            <Link to={`/users/${user.id}`}>
              <li>{user.lastname}</li>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
