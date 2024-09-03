import React from 'react';
import "./Header.scss";
//import HeaderButton from '../HeaderButton/HeaderButton';
import Avatar from '../Avatar/Avatar';
//import Logo from '../Logo/Logo';
import Photo from '../.././Images/Header.jpg';
import HeaderCenter from '../.././Images/HeaderCenter.png';




const Header = ({setModalActive}) =>{
    return(
    <div className='Header'>
         <Avatar setModalActive={setModalActive}/> 
        
        <img src={Photo} alt='' className='HeaderImg'/>
        <img src={HeaderCenter} alt='' className='HeaderCenter'/>
        
    </div>
    );  
}

export default Header;