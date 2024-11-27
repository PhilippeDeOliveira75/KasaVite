import './banner.scss'

function Banner ({ imageSrc, title }) {

  return (

    <div className="home-banner__row">
      <img src={imageSrc} alt="Bannière" className="home-banner__image" />
      <h1 className="home-banner__title">{title}</h1>
    </div>

  )

}

export default Banner
