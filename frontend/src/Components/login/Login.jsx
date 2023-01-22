import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import Becool from "./BeCool.PNG";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handelLogin = () => {
    if (email && password) {
      axios
        .post("http://localhost:8000/user/login", { email, password })
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          alert(res.data.msg);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter Email or Password");
    }
  };
  return (
    <div className="Login_main">
      <div className="Login_img">
        <div className="Login_text">
          <p
            style={{
              fontSize: "2rem",
            }}
          >
            Welcome to the world of BeCool!
          </p>
        </div>
        <img src={Becool} width="100%" height={"100%"} />
      </div>
      <div className="Login_form">
        <p style={{ fontSize: "2rem" }}>
          Log in / Sign up <br></br>
        </p>
        <div
          style={{
            color: "gray",
            fontWeight: 300,
            marginTop: "1.5rem",
          }}
        >
          {" "}
          for Latest trends, exciting offers and everything BeCool!
        </div>
        <div className="in">
          <input
            placeholder=" User Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br></br>
          <input
            placeholder=" User Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button
            style={{
              background: "#42a2a2",
              width: "40%",
              borderRadius: "5px",
              height: "3rem",
              marginTop: "1rem",
              fontSize: "2rem",
            }}
            onClick={handelLogin}
          >
            Login
          </button>
        </div>
        <div
          style={{
            border: "1px solid gray",
            width: "50%",
            margin: "auto",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        ></div>
        <p> Go to user <Link style={{color:"red"}} to={"/register"}>Register page</Link></p>
      </div>
    </div>
  );
};
