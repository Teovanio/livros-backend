import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav ">
        <li className="nav-item">
          <Link className="nav-link custom-navbar" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link custom-navbar" href="/LivroLista">
            Catálogo
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link custom-navbar" href="/LivroDados">
            Novo
          </Link>
        </li>
      </ul>
    </nav>
  );
};
