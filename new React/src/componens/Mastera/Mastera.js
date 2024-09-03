import React from "react";
import Master1 from "../Master1/Master1";
import Master2 from "../Master2/Master2";
import './Mastera.scss';

const Mastera = ({spisok}) =>{
    return (
        <div className="Mastera">
            <Master1 spisok={spisok.Master1}/>
            <Master2 spisok={spisok.Master2}/>
        </div>
    )
}

export default Mastera;