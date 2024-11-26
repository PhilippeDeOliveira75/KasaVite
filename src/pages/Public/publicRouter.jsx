import { Home, Lodging, About, Error, PublicLayout } from '@pages/Public/import.js'

import { Routes, Route } from 'react-router-dom'

function PublicRouter () {

    return (

        <Routes>

            <Route element={<PublicLayout />} >

                <Route path="/" element={<Home />} />
                <Route path='/lodging/:id' element={<Lodging />} />
                <Route path='/about' element={<About />} />


            </Route>

            <Route path="*" element={<Error />} />

        </Routes>
        
    )
}

export default PublicRouter