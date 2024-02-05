import React from "react";
import "./modalwindow.css";

function ModalWindow({ active, setActive }) {
  return (
    <div>
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <h3>Log Out ?</h3>
          <p>Are you sure?</p>
          <div className="buttons">
            <button className="Yes">Yes</button>
            <button className="No" onClick={() => setActive(false)}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
