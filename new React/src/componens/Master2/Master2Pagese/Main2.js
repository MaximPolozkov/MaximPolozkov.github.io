import React from "react";
import Slider from "../../Slider/Slider"
import MyWorks from "../MyWorks";
import ButtonOnlain from "../../ButtonOnlain/ButtonOnlain";

const Main2 = ({spisok}) =>{
    return(
        <div>
            <ButtonOnlain/>
            <Slider spisok={spisok.Master2.slider}/>
            <MyWorks spisok={spisok.Master2.myWorks}/>
        </div>
    )
}

export default Main2;