import './rentalinfo.scss'

import { RateStar } from '@components/import'


function RentalInfo (props) {

	const tags = props.tags
  	const tagsList = tags.map((tag, i) => 
		<li key={i} className='rental-info__tags'>{tag}</li>
	)

	return (

		<div className='rental-info__container'>

			<div className='rental-info__title-tags'>

				<div className="rental-info__title-wrapper">
					<h1 className='rental-info__title'>{props.title}</h1>
					<p className='rental-info__location'>{props.location}</p>
				</div>

				<ul className='rental-info__tags-wrapper'>{tagsList}</ul>

			</div>

			<div className='rental-info__host-rating'>

				<div className='rental-info__host-wrapper'>
					<p className='rental-info__host-name'>{props.hostname}</p>
					<img className='rental-info__host-picture' src={props.hostpicture} alt={`Photo de ${props.hostname}`} />
				</div>

          		<RateStar rating={props.rating} />

			</div>

		</div>



	)

}

export default RentalInfo