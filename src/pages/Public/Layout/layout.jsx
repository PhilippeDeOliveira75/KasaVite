import './layout.scss'

import { Outlet, useLocation } from 'react-router'

import { Header, Footer, Banner } from '@components/import.js'

import { HomeBanner, AboutBanner } from '@assets/import'

function PublicLayout() {

  const location = useLocation()

  
  const bannerConfig = {
    '/': {
      imageSrc: HomeBanner,
      title: 'Chez vous, partout et ailleurs',
    },
    '/about': {
      imageSrc: AboutBanner,
      title: 'À propos de nous',
    },
  }

  const currentBanner = bannerConfig[location.pathname] || null;

  return (
    <div className="layout">
      <div className="main-content">
        <Header />
        {currentBanner && (
          <Banner imageSrc={currentBanner.imageSrc} title={currentBanner.title} />
        )}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default PublicLayout
