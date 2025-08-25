import React, { useState } from "react";
import "./Signup.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeIcon, setEyeicon] = useState(false);
  const click = () => {
    console.log(email, password);
  };
  return (
    <div className="container">
      <div className="signupContainer">
        <h1>login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="password">
          <input
            type={eyeIcon ? "text" : "password"}
            placeholder="Enter password"
            className="p"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {eyeIcon ? (
            <FaRegEye
              onClick={() => {
                setEyeicon(!eyeIcon);
              }}
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => {
                setEyeicon(!eyeIcon);
              }}
            />
          )}
        </div>
        <button onClick={click}>Enter</button>
      </div>
    </div>
  );
};

export default Signup;
