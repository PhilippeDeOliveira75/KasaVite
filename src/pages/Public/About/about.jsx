import './about.scss'
import { Collapse } from '@components/import'
import { useState, useEffect } from "react"


function About() {

  	const [aboutInfos, setAboutInfos] = useState([])

  	useEffect(() => {
		fetch("about.json")
		.then(function(res){
			if(res.ok){
				return res.json()
			}
		})
		.then(function(res){
			console.log(res)
			setAboutInfos(res)
		})
		.catch(function(err){
			console.log(err)
		})
	}, [])

	
	return (

			<div>

                {aboutInfos.map((infos, index) => (
                    <Collapse
                        key={`${infos.title}-${index}`}
                        title={infos.title}
                        texte={infos.texte}
                    />
                ))}

            </div>

	)

}

export default About