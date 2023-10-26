import './Header.css';
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.webp';
import '../../index.css';

function Header() {

	return (
		<header>
			<div className='row-header'>
				<NavLink to="/">
					<img src={logo} alt='logo_kasa' className='logo-kasa' />
				</NavLink>
				<nav>
					<ul className='w-nav'>
						<li>
							<NavLink to="/" className="nav-btn primary">Accueil</NavLink>
						</li>
						<li>
							<NavLink to="/about" className="nav-btn primary">À Propos</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;