import React, { useEffect, useState } from "react";
import "./modalwindow.css";
import { useNavigate } from "react-router-dom";

function ModalWindow({ active, setActive }) {
  const [logOut, setLogOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (logOut) {
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("refreshToken");
      navigate("/");
    }
  });

  return (
    <div>
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <h3>Log Out ?</h3>
          <p>Are you sure?</p>
          <div className="buttons">
            <button className="Yes" onClick={() => setLogOut(true)}>
              Yes
            </button>
            <button className="No" onClick={() => setActive(false)}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
