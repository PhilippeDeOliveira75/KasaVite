import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
import Gallery from '../../components/Gallery/Gallery';
import RentalInfo from '../../components/RentalInfo/Rentalinfo';
import Footer from '../../components/Footer/Footer';
import '../../index.css';
import './Lodging.css';

function Lodging() {

	const { id } = useParams();
	const navigate = useNavigate();
	const [lodging, setLodging] = useState(null);

	useEffect(() => {
		fetch("http://localhost:5173/logements.json")
		.then(function(res){
			if(res.ok){
				return res.json();
			}
		})
		.then(function(res){
			const found = res.find((item) => item.id === id);
			if(found === undefined) {
				return navigate("/404")
			} else {
				setLodging(found)
			}
		})
		.catch(function(err){
			console.log(err)
		})
	}, []);

	return (
		<div>
			<Header />
			{lodging && (
				<div>
					<Gallery
						pictures={lodging.pictures}
					/>
					<RentalInfo
						title={lodging.title}
						location={lodging.location}
						hostname={lodging.host.name}
						hostpicture={lodging.host.picture}
						tags={lodging.tags}
						description={lodging.description}
						equipments={lodging.equipments}
						rating={lodging.rating}
					/>
				</div>
			)}
			<Footer />
		</div>
	);
}

export default Lodging;