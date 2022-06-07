import "./sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/">
          <li>Transaksi</li>
        </Link>
        <Link to="/test2">
          <li>Edukasi Pengolahan Sampah</li>
        </Link>
        <Link to="/test3">
          <li>Penukaran Poin</li>
        </Link>
        <Link to="/test4">
          <li>Histori Transaksi</li>
        </Link>
      </ul>
    </div>
  );
}
