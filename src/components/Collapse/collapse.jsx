import './collapse.scss'
import { ChevronDown, ChevronUp } from '@assets/import'
import { useState, useRef } from 'react'


function Collapse(props) {
    const [open, setOpen] = useState(false) 
    const toggle = () => {
        setOpen(!open) 
    }

    const contentRef = useRef()

    return (
        <div>
            <div
                className={`w-collapseTitle primary-background ${open ? 'open' : ''}`}
                onClick={toggle}
            >
                <h1 className='collapseTitle'>{props.title}</h1>
                <p className='buttonUpDown'>
                    {!open ? (
                        <img src={ChevronDown} alt="Chevron down" />
                    ) : (
                        <img src={ChevronUp} alt="Chevron up" />
                    )}
                </p>
            </div>
            <div
                className="w-paragraph secondary"
                ref={contentRef}
                style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}
            >
                <div className='toggleParagraph primary'>{props.texte}</div>
            </div>
        </div>
    )
}

export default Collapse
