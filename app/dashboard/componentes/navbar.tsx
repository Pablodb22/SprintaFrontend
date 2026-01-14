import Link from 'next/link';
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
          <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111318' }}>Sprinta</span>
        </Link>

        <div>
          <ul className="navbar-nav ms-auto align-items-center gap-3 flex-row">
            <li className="nav-item">
            <Link href="/login"> <button className="btn btn-sign-in">Iniciar sesión</button></Link>
            </li>
            <li className="nav-item">
              <Link href="/registro"><button className="btn btn-get-started">Comienza</button></Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}