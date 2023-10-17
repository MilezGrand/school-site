import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span>
          © {new Date().getFullYear()} Частная начальная школа «Территория добра
          и успеха».
        </span>
      </div>
    </footer>
  );
}

export default Footer;
