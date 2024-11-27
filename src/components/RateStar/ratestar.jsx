import './ratestar.scss'

import { EmptyStar, PlainStar } from '@assets/import'


function RateStar (props) {

    const rating = props.rating
    const range = [1, 2, 3, 4, 5]
    
	return (

        <div className='rateStar__wrapper'>

            {range.map((value) =>
                rating >= value ? 
                <img className='rateStar__img' key={value} src={ PlainStar } alt='Rate star'/> : 
                <img className='rateStar__img' key={value} src={ EmptyStar } alt='Rate star'/> 
            )}
            
        </div>

	)

}

export default RateStar