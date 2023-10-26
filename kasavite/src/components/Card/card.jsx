import './Card.css';
import '../../index.css';
import { NavLink } from "react-router-dom";


function Card({id, title, cover}) {
    return (
        <article>
            <NavLink to={'/lodging/' + id} className='card' data-id={id}>
                <div>
                    <img className='card-img' src={cover} alt={`${title} cover`}></img>
                </div>
                <div className='w-card-title'>
                    <h2 className='card-title'>{title}</h2>
                </div>
            </NavLink>
        </article>
    )
}

export default Card;