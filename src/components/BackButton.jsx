import React from "react";

function BackButton(props) {
  return (
    <button className="back-btn" onClick={() => props.setPage("home")}>
      ← Back to Home
    </button>
  );
}

export default BackButton;
