import './lodging.scss'

import { Gallery, RentalInfo, Collapse } from '@components/import'

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

function Lodging () {

    const { id } = useParams()
    const navigate = useNavigate()
    const [lodging, setLodging] = useState(null)

    useEffect(() => {
        fetch("/lodgings.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`)
                }
                return res.json()
            })
            .then((data) => {
                const found = data.find((item) => item.id === id)
                if (!found) {
                    navigate("/404")
                } else {
                    setLodging(found)
                }
            })
            .catch((err) => {
                console.error("Erreur lors du chargement des données:", err)
                navigate("/404")
            })
    }, [id, navigate])

    return (

        <div>

            {lodging && (

                <div>

                    <Gallery pictures={lodging.pictures} />

                    <RentalInfo
                        title={lodging.title}
                        location={lodging.location}
                        hostname={lodging.host.name}
                        hostpicture={lodging.host.picture}
                        tags={lodging.tags}
                        rating={lodging.rating}
                    />

                    <div>
                        <Collapse
                            title="Description"
                            texte={lodging.description}
                        />
                        <Collapse
                            title="Équipements"
                            texte={
                                <ul>
                                    {lodging.equipments.map((equipment, index) => (
                                        <li key={index}>{equipment}</li>
                                    ))}
                                </ul>
                            }
                        />

                    </div>

                </div>

            )}

        </div>

    )

}

export default Lodging
