import './banner.scss'

import { HomeBanner } from '@assets/import'

function Banner () {

    const title = 'Chez vous, partout et ailleurs'
    
    return (

        <div className='row-home-banner'>
            <img src={ HomeBanner } alt='Paysage_de_récifs' className='img-home-banner' />
            <h1 className='title-home-banner'>{title}</h1>
        </div>

    )

}

export default Banner