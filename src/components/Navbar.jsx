import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <h1 className="nav-brand">eHER </h1>

      {props.page !== "home" && (
        <button className="back-btn" onClick={() => props.setPage("home")}>
          ← Back
        </button>
      )}
      <span className="brand-icon material-icons" aria-hidden="true">
        female
      </span>
    </nav>
  );
}
