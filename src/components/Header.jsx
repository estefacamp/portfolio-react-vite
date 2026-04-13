import { useState } from "react";

function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sobremi", label: "Sobre mí" },
    { id: "skills", label: "Skills" },
    { id: "curriculum", label: "Currículum" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contacto", label: "Contacto" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="container-custom header-inner">
        <a href="#inicio" className="brand" onClick={closeMenu}>
          <span className="brand-dot"></span>
          Estefania Campisi
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className="nav-link-custom"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Cambiar tema"
          >
            <i className={`bi ${darkMode ? "bi-sun" : "bi-moon-stars"}`}></i>
          </button>

          <a
            href="/CV_Estefania_Campisi_.docx"
            download
            className="btn-primary-custom desktop-only"
          >
            Descargar CV
          </a>

          <button
            className="icon-btn mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;