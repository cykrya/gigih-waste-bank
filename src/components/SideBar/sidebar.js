import "./sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/transaksi">
          <li>Transaksi</li>
        </Link>
        <Link to="/edukasi">
          <li>Edukasi Pengolahan Sampah</li>
        </Link>
        <Link to="/penukaranpoin">
          <li>Penukaran Poin</li>
        </Link>
        <Link to="/histori">
          <li>Histori Transaksi</li>
        </Link>
      </ul>
    </div>
  );
}
