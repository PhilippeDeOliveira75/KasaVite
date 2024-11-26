import './header.scss'

import { NavLink } from "react-router-dom"
import { Logo } from '@assets/import.js'

function Header () {

    return (
        <header className="header">
            <div className="header__row">
                <NavLink to="/">
                    <img src={Logo} alt="logo_kasa" className="header__logo" />
                </NavLink>

                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <NavLink to="/" >Accueil</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink to="/about">À Propos</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header