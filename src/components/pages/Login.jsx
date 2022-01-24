import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let item = { email, password };
    let result = await fetch(
      "https://custom-dj-rest-auth.herokuapp.com/dj-rest-auth/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  });
  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-5">Login Page </h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
