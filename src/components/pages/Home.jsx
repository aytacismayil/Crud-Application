import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../layout/Search";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, [searchText]);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3002/users`);
    console.log(result);
    setUsers(result.data.reverse());
    setLoading(false);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };

  return loading ? (
    <div className="loader">Loading...</div>
  ) : (
    <div className="container mt-4">
      <h1 className="mb-3">Home Page</h1>
      {/* <Search
        getSearch={(parametr) => {
          setSearch(parametr);
        }}
      /> */}
     
      <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary m-2"
                    to={`/users/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary "
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger m-2"
                    to="/"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
