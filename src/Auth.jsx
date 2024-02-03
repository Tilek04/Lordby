import React, { useState } from "react";
import { useFormik } from "formik";
import { Formik, Form, ErrorMessage } from "formik";
import lordImg from "./assets/illustration.png";
import { basicSchema } from "./schemas";
import "./auth.css";
import { API } from "./axios.js";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Auth() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

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
      if (response.status === 200) {
        navigate("/home");
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
          <h1>Welcome Back !</h1>
          <input
            id="username"
            type="text"
            autoCapitalize="off"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter your name"
            className={formik.errors.username ? "error" : ""}
          />

          <input
            id="password"
            type={visible ? "text" : "password"}
            autoCapitalize="off"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
            className={formik.errors.password ? "error" : ""}
          />
          <div className="icons" onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>

          <button className="login_button" onClick={handleLogin} type="submit">
            Log in
          </button>

          <Link className="link" to="/sign-up">
            I don't have an account yet
          </Link>
        </div>
      </div>
    </>
  );
}

export default Auth;
