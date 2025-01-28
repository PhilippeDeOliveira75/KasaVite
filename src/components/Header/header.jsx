import './header.scss'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import { Logo } from '@assets/import.js'
import { Modal } from '@components/import';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/about', label: 'À Propos' },
  ];

  return (
    <header className="header">
      <div className="header__row">
        <NavLink to="/" className="header__logo">
          <img src={Logo} alt="logo_kasa" />
        </NavLink>

        <nav className="header__nav">
          <GiHamburgerMenu className="header__burger-icon" onClick={toggleMenu} />

          <ul className="header__nav-list">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="header__nav-item">
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
 
      <Modal isOpen={menuOpen} onClose={toggleMenu}>
        <ul className="modal__nav-list">
          {navLinks.map(({ to, label }) => (
            <li key={to} className="modal__nav-item">
              <NavLink to={to} onClick={toggleMenu}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </Modal>
    </header>
  );
}

export default Header;