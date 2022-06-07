import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-wrapper">
      <Link to="/home">
        <img src="/gwblogo.png" alt="Logo" />
      </Link>
      <div className="navigation">
        <Link to="/login">
          <p>Masuk</p>
        </Link>
      </div>
    </header>
  );
}