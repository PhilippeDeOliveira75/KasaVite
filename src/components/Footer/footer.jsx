import { LogoFooter } from '@assets/import.js';
import './footer.scss';

function Footer() {

	return (

		<footer className='row-footer'>

			<div className='w-footer'>

				<img src={ LogoFooter } alt='logo-kasa'/>

				<p className='text-footer'>© 2020 Kasa. All rights reserved</p>

			</div>

		</footer>

	)

}

export default Footer