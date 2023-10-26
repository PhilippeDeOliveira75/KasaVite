import Header from '../../components/Header/Header';
import Error from '../../components/Error/Error';
import Footer from '../../components/Footer/Footer';
import './Error.css';


function Error404() {
	return (
		<div>
			<Header />
			<Error />
			<Footer />
		</div>
	);
}

export default Error404;