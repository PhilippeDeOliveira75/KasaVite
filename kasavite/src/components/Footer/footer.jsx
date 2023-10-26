import logo from '../../assets/logo-footer.webp';
import './Footer.css';
import '../../index.css';


function Footer() {
	return (
		<footer className='row-footer'>
			<div className='w-footer'>
				<img src={logo} alt='logo-kasa'/>
				<p className='text-footer'>© 2020 Kasa. All rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;