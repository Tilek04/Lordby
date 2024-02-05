import React, { useEffect, useState } from "react";
import img from "./assets/illustration.png";
import "./home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ModalWindow from "./ModalWindow";

function Home() {
  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem("accessToken");

    if (!token) {
      navigate("/");
    } else {
      toast.success("Login successful!");
    }
  }, [navigate]);

  return (
    <div>
      
      <ToastContainer />
      <div className="home_container">
        <h2>Welcome back !</h2>
        <p>Lorby - your personal tutor !</p>
        <img className="home_img" src={img} alt="main image" />
        <button onClick={() => setModalActive(true)}>Log Out</button>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default Home;
