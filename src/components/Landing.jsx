import React from "react";

export default function Landing(props) {
  return (
    <main className="app">
      <h1 className="brand">empowHER</h1>

      <p className="tagline">
        <i>Build. Grow. Thrive.</i>
      </p>

      <button
        className="next-btn"
        aria-label="Skip to Home"
        onClick={props.onCheck}
      >
        <span className="material-icons">navigate_next</span>
      </button>
    </main>
  );
}
