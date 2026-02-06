import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p>© {currentYear} empowHER</p>
    </footer>
  );
}

export default Footer;
