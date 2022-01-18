import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    navigate("/");
  };
  console.log(user);
  return (
    <div>
      <div className="container">
        <h1 className="mt-4 mb-3">Add User</h1>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              name="name"
              onChange={(e) => onInputChange(e)}
              value={name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              name="username"
              onChange={(e) => onInputChange(e)}
              value={username}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => onInputChange(e)}
              value={email}
            />
          </div>
          <button className="btn btn-primary">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
