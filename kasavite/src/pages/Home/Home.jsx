import React, { useState, useEffect } from "react"
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import '../../index.css';
import '../../components/Card/Card.css';
import './Home.css';


function Home() {

	const [lodgings, setLodgings] = useState([])

	useEffect(() => {
		fetch("http://localhost:5173/logements.json")
		.then(function(res){
			if(res.ok){
				return res.json();
			}
		})
		.then(function(res){
			console.log(res);
			setLodgings(res);
		})
		.catch(function(err){
			console.log(err)
		})
	}, []);

	return (
		<div>
			<Header />
			<Banner />
			<div className='row-cards secondary-background'>
            	<div className='w-cards'>
				{ lodgings && lodgings.length > 0 && lodgings.map((item, i) =>
				<Card
					key={i}
					id={item.id}
					title={item.title}
					cover={item.cover}
				/>
			)}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;