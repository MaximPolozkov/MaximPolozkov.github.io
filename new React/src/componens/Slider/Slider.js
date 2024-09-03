import React, { useState } from "react";
import './Slider.scss';
import BtnSlider from "../BtnSlider/BtnSlider";
import BSlider from "../BtnSlider/BSlider";






const Slider = (props) => {
   
    let spisok = props.spisok
   
    
    const[sliderIndex, setSliderIndex] = useState(1);
    const[modalIndex, senIndex] = useState(false)
    
    const nextSlide = () => {
        
        if(sliderIndex !== spisok.length ){
            setSliderIndex(sliderIndex + 1)
            senIndex (false)
        }
        else if(sliderIndex === spisok.length ){
            setSliderIndex(1)
            senIndex (false)
        }
    }
    
    const prevSlide = () => {
        if(sliderIndex !== 1  ){
            setSliderIndex(sliderIndex - 1)
            senIndex (false)
        }
        else if (sliderIndex === 1 ){
            setSliderIndex(spisok.length)
            senIndex (false)
        }
    }

    const openModal = () => {
        senIndex(!modalIndex)
        setSliderIndex(sliderIndex)
    } 
    
   
    return(
        
         <div className="sliderOb">
             
            
            

        <div className="slider">
       <div className={modalIndex === false ? "obBtn" : "obBtnNo"}>
       <BtnSlider  moveSlide={prevSlide} direction={"prev"} />
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
       </div>
        
             
                    {spisok.map((obj, index) =>{ 
                         
                           return(
                            <div key={obj.id} className={sliderIndex === index + 1 ? "slide active-anim" : "slide"}>
                                
                            <div className="obDiskri">
                    <h3 className={modalIndex === false ? "sliderDis no" : "sliderDis yes"}>{obj.diskript}</h3>
                    </div>
                    
                            <div className="obName">
                                <h1 className="nameUslugi">{obj.nameUslugi}</h1>
                            </div>
                            <div className="obPrice">
                            <h3 className="price">Цена:{obj.price}</h3>
                            </div>
                            <img src={obj.img} alt="" className="sliderImg"/>
                            
                            
                            <div/>
                                   
                            </div> 
                            
                           
                           )
                        
                           })}


                    

</div>





                                <div className="sliderButton">
                            <BSlider openModal={openModal} modalIndex={modalIndex}/>
                            </div>
            
            </div>
           
               
        
    )
}


export default Slider

                    
                    
               