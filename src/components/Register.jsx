import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigate
  const navigate = useNavigate();

  // form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    navigate("/login");
  };

  return (
    <div>
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="form-container p-5 rounded bg-white">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">
              <u>Register</u>
            </h3>
            <div className="mb-2">
              <label htmlFor="first name">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="last name">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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
                Register
              </button>
            </div>
            <div className="text-right">
              <p>
                User Already Register <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
