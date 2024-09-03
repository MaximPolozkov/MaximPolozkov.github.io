import React, { useState } from "react";
import "./Uslugi.scss"

import Calendar from "../Calendar/Calendar";
import Modal from "../Modal/Modal";




const Uslugi = ({spisok}) =>{
    const [modalActiveCalendar, setModalActiveCalendar] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    
    const openModal = (id) => {
         setCurrentId(id);
        setModalActiveCalendar(true);
      };

    
    return(
       
        <div className="ListUslug">
            <h1>Выбрать услугу</h1>
            {spisok.slider.map((ob, index) =>{  
                return(
                    <div className="wrapperUslugi" key={index} onClick={() => openModal(ob.id)}>
                        <button className="buttonUslugi"  key={index} >{ob.nameUslugi}  <span>{ob.price}</span></button>
                        
                    </div> 
                )
            })}
            
            {modalActiveCalendar && (
                        <Modal 
                        active={modalActiveCalendar} 
                        setActive={setModalActiveCalendar}
                        children={<Calendar key={currentId} {...spisok.slider.find((item) => item.id === currentId)}  />}
                        />
                          
                        
                      )}
        </div>
    );
    
}
export default Uslugi;