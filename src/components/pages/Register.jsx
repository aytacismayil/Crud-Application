import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async () => {
    let item = { username, email, password1, password2 };
    let result = await fetch(
      "https://custom-dj-rest-auth.herokuapp.com/dj-rest-auth/registration/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    setLoading(true);
    navigate("/login");
    console.log(result);
  };
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/login");
    }
  });
  return loading ? (
    <div className="loader">Loading...</div>
  ) : (
    <div>
      <div className="container">
        <h1 className="text-center mt-3 mb-5">Sign Up </h1>
        <div className="col-sm-6 offset-sm-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <input
            type="password"
            placeholder="Password1"
            className="form-control"
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
          />
          <br />
          <input
            type="password"
            placeholder="Password2"
            className="form-control"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
          <br />
          <button className="btn btn-primary" onClick={signUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
