import './header.scss';
import { NavLink } from "react-router-dom";
import { Logo } from '@assets/import.js';

function Header() {

	return (

		<header>

			<div className='row-header'>

				<NavLink to="/">

					<img src={ Logo } alt='logo_kasa' className='logo-kasa' />

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

	)

}

export default Header