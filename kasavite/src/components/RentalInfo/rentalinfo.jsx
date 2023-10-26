import './Rentalinfo.css';
import '../../index.css';
import RateStar from '../RateStar/Ratestar';
import Collapse from '../Collapse/Collapse';


function RentalInfo(props) {

	const tags = props.tags;
  	const tagsList = tags.map((tag, i) => 
		<li key={i} className='tags primary-background'>{tag}</li>
	);

	const equipments = props.equipments;
	const equipmentsList = equipments.map((equipment, i) => 
		<li key={i} className=''>{equipment}</li>
	);

	return (
		<div className='row-rentalinfo'>
			<div className='w-title-tags-host-rating'>
			<div className="row-title-tags">
				<div className="w-title">
					<h1 className='lodging-title primary'>{props.title}</h1>
					<p className='lodging-location primary'>{props.location}</p>
				</div>
				<div className="w-tags">
					<ul className='tagsList'>{tagsList}</ul>
				</div>
				
			</div>

			<div className="row-host-rating">
				<div className="w-host">
					<div className='w-host-name'>
						<p className='host-name primary'>{props.hostname}</p>
					</div>
					<img className='host-picture' src={props.hostpicture} alt={`Photo de ${props.hostname}`}></img>
				</div>
				
				<div className="w-rating">
					<RateStar 
						rating={props.rating}/>
				</div>
			</div>
			</div>

			<div className="row-description-facilities">
				<div className="w-description">
					<Collapse
						title="Description"
						texte={props.description}
					/>
				</div>
				<div className="w-facilities">
					<Collapse 
						title="Equipements"
						texte={equipmentsList}
					/>
				</div>
			</div>
		</div>
	);
}

export default RentalInfo;