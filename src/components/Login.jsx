import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigate
  const navigate = useNavigate();

  // form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate("/");
  };
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form-container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">
            <u>Login</u>
          </h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="text-right">
            <p>
              User not exist ? Please Register{" "}
              <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
