import './Collapse.css';
import React, { useRef, useState } from 'react';
import chevronDown from '../../assets/ChevronDown.webp';
import chevronUp from '../../assets/ChevronUp.webp';
import '../../index.css';

function Collapse(props){

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    const contentRef = useRef();

    return(
        <div>
            <div className='w-collapseTitle primary-background' onClick={toggle}>
                <h1 className='collapseTitle'>{props.title}</h1>
                <p className='buttonUpDown'>
                    {!open ? <img src={chevronDown} alt="Chevron down" /> : <img src={chevronUp} alt="Chevron up" /> }
                </p>
            </div>
            <div className="w-paragraph secondary" ref={contentRef} style={open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                <div className='toggleParagraph primary'>{props.texte}</div>
            </div>

        </div>
    )

}



export default Collapse