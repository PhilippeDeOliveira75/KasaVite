import './card.scss';

import { NavLink } from "react-router-dom"

function Card ({id, title, cover}) {

        return (

        <article>
            <NavLink to={'/lodging/' + id} className='card' data-id={id}>
                <div>
                    <img className='card__img' src={cover} alt={`${title} cover`}></img>
                </div>
                <div className='card__w-title'>
                    <h2 className='card__title'>{title}</h2>
                </div>
            </NavLink>
        </article>

    )

}

export default Card