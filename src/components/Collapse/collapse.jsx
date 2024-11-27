import './collapse.scss'

import { ChevronDown, ChevronUp } from '@assets/import'
import { useState, useRef } from 'react'


function Collapse (props) {

    const [open, setOpen] = useState(false) 
    const toggle = () => {
        setOpen(!open) 
    }

    const contentRef = useRef()

    return (

        <div className='collapse__container'>

            <div className={`collapse__title-wrapper ${open ? 'open' : ''}`} onClick={toggle} >
                <h1 className='collapse__title'>{props.title}</h1>
                {!open ? (
                    <img src={ChevronDown} alt="Chevron down" />
                    ) : (
                    <img src={ChevronUp} alt="Chevron up" />
                )}
            </div>

            <div className="collapse__text-wrapper" ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }} >
                <div className='collapse__text'>{props.texte}</div>
            </div>

        </div>

    )

}

export default Collapse