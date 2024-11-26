import './banner.scss'

import { HomeBanner } from '@assets/import'

function Banner () {

    const title = 'Chez vous, partout et ailleurs'
    
    return (

    <div className="home-banner__row">
        <img src={HomeBanner} alt="Vue panoramique sur des falaises" className="home-banner__image" />
        <h1 className="home-banner__title">{title}</h1>
    </div>


    )

}

export default Banner