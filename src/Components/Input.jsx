import React, { useState } from "react";
import "./input.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
const Input = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [eyeIcon, setEyeicon] = useState(false);
  const [eyeIcon2, setEyeicon2] = useState(false);
  const click = () => {
    console.log(firstName, lastName, userName, password, ConfirmPassword);
  };
  return (
    <div className="mainContainer">
      <div className="container">
        <h1>Sign up</h1>
        <input
          type="text"
          className="input1"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          className="input1"
          placeholder="Enter last name "
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter userName "
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
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
        <div className="password">
          <input
            type={eyeIcon2 ? "text" : "password"}
            placeholder="Confirm password"
            value={ConfirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          {eyeIcon2 ? (
            <FaRegEye
              onClick={() => {
                setEyeicon2(!eyeIcon2);
              }}
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => {
                setEyeicon2(!eyeIcon2);
              }}
            />
          )}
        </div>

        <button onClick={click}>Submit</button>
      </div>
    </div>
  );
};

export default Input;
