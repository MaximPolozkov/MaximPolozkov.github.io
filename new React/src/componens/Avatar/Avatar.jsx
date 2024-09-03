import React from "react";
import AvatarJPG from "../../Images/Avatarka.jpg";
import { Link} from 'react-router-dom';
import "./Avatar.scss";


const Avatar = ({setModalActive}) => {
    return(
    <div>
    <Link to='/Login'>
        <div className="Avatar">
            <img src={AvatarJPG} alt="" className="avatarImg"></img>
        </div>
    </Link>
    <div>
         <div onClick={() => setModalActive(true)}>Зарегестрироваться</div>
    </div>
    </div>
    
        
    );
}

export default Avatar;