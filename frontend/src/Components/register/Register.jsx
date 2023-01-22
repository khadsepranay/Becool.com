import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import Becool from "./BeCool.PNG";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  let navigate = useNavigate();
  const handelregister = () => {
     
        if (email && password && username) {
          axios
            .post("http://localhost:8000/user/register", { email, password,username })
            .then((res) => {
             
                alert(res.data);
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("Please enter Email or Password,UserName");
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
          Sign up <br></br>
        </p>
        <div
          style={{
            color: "gray",
            fontWeight: 300,
            marginTop: "1.5rem",
          }}
        ></div>
        <div className="in" style={{ marginTop: "0.1rem" }}>
          <input
            placeholder=" User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <input
            placeholder=" User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            placeholder=" User Password"
            value={password}
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
            onClick={handelregister}
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
        <p>
          {" "}
          Go to user <Link style={{color:"red"}} to={"/login"}>Login page</Link>
        </p>
      </div>
    </div>
  );
};
