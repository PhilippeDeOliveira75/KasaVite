import './Gallery.css';
import React, { useState } from 'react';
import chevronRight from '../../assets/ChevronRight.webp';
import chevronLeft from '../../assets/ChevronLeft.webp';
import '../../index.css';



function Gallery(props) {

    const [index, setindex] = useState(0)
    const pictures = props.pictures;
    const pictureList = pictures.length;
    
    function chevronNext(){
        if(index === pictureList -1 ){
            setindex(0)
        }else{
            setindex(index +1)
        }
    }
    
    function chevronPrevious(){
        if(index === 0 ){
            setindex(pictureList -1)
        }else{
            setindex(index -1)
        }
    }
    
    return (
        <div className="row-carousel" >
            <div className='w-carousel'>
				{pictures && pictures.length > 0 && pictures.map((picture, i) =>
				    <img key={i} className={(i === index) ? `carouselImg carouselImg-${i} active` : `carouselImg carouselImg-${i}`} src={picture} alt="" />
				)}

                {pictures.length > 1 ? (
                    <>
                <div className='carouselChange'>
                    <div className='previous' onClick={chevronPrevious}> 
                        <img className='imgChevron' src={chevronLeft} alt="Chevron left" /> 
                    </div>
                    <div className='next' onClick={chevronNext}>
                        <img className='imgChevron' src={chevronRight} alt="Chevron right" />
                    </div> 
                </div>
                </>
                ) : null}
            </div>
            <div className='number'>
                {index+1 + " / " + pictureList}
            </div>
         </div>
      );
    }

export default Gallery;