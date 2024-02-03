import React, { useState } from "react";
import { useFormik } from "formik";
import { Formik, Form } from "formik";
import lordImg from "./assets/illustration.png";
import { basicSchema } from "./schemas";
import "./auth.css";
import { API } from "./axios.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Auth() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: basicSchema,
  });
  console.log(formik);
  console.log(formik.errors);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API}/login/`, {
        username: formik.values.username,
        password: formik.values.password,
      });
  
      // handle the response as needed
      console.log(response);
      if(response.status === 200) {
        navigate("/home")
          }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  

  return (
    <>
      <div className="auth__container">
        <div className="auth_left_side">
          <img src={lordImg} className="auth_img" alt="Lorby main image" />
          <h2 className="auth_text">Lorby</h2>
          <p>Your personal tutor</p>
        </div>
        <div className="auth_right_side">
          <h1>Welcome Back!</h1>
          <input
            id="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter your name"
          />
          <br />
          <input
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          <br />
          <button onClick={handleLogin} type="submit">Log in</button>
        </div>
      </div>
    </>
  );
}

export default Auth;
