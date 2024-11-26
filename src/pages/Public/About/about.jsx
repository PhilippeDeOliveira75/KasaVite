import './about.scss'

import { Collapse } from '@components/import'

import { useState, useEffect } from "react"


function About() {

  	const [aboutInfos, setAboutInfos] = useState([])

  	useEffect(() => {
		fetch("about.json")
		.then(function(res){
			if(res.ok){
				return res.json();
			}
		})
		.then(function(res){
			console.log(res);
			setAboutInfos(res);
		})
		.catch(function(err){
			console.log(err)
		})
	}, [])

	
	return (
		
		<div>
			
			<div className='row-about-banner'>
				<div className='img-about-banner'>
				</div>
        	</div>

			<div className='row-collapse'>
                {aboutInfos.map((infos, index) => (
                    <Collapse
                        key={`${infos.title}-${index}`}
                        title={infos.title}
                        texte={infos.texte}
                    />
                ))}
            </div>
			
		</div>

	)

}

export default About