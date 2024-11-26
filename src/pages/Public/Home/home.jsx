import './home.scss'

import { Banner, Card } from '@components/import'

import { useState, useEffect } from "react"


function Home() {

	const [lodgings, setLodgings] = useState([])

	useEffect(() => {
		
		fetch("lodgings.json")
		.then(function(res){
			if(res.ok){
				return res.json();
			}
		})
		.then(function(res){
			setLodgings(res)
		})
		.catch(function(err){
			console.log(err)
		})
	}, [])

	return (
		
		<div className='home__content'>
	
            <div className='cards__w'>
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

	)

}

export default Home