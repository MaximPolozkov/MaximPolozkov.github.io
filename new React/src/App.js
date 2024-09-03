import React, { useState } from 'react';
import Header from './componens/Header/Header';
import './App.scss'
import Footer from './componens/Footer/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Mastera from './componens/Mastera/Mastera';
import Main2 from './componens/Master2/Master2Pagese/Main2';
//import Calendar from './componens/Calendar/Calendar';
import Uslugi from './componens/Uslugi/Uslugi';
import AvatarKabinet from './componens/AvatarKabinet/AvatarKabinet';
import Login from './componens/Login/Login';
import Modal from './componens/Modal/Modal';


const App = ({spisok}) => {
 const [modalActive, setModalActive] = useState(true);
 
  return (
    <>
    <HashRouter>
    <div className='wrapper'>
      <div className='container'>
        <div className='App'>
        
          <Header spisok={spisok.Avatar} setModalActive={setModalActive}/>
          <Routes>
            <Route path="/" exact element={<Mastera spisok={spisok}/>}></Route>
            <Route path="/Main2" element={<Main2 spisok={spisok}/>}></Route>
            <Route path='/Uslugi' element={<Uslugi spisok={spisok.Master2}/>}></Route>
            <Route path='/AvatarKabinet' element={<AvatarKabinet/>}></Route>
          </Routes>
          <Footer />
          <Modal active={modalActive} setActive={setModalActive}>
            <Login/>
          </Modal>
         
        </div>
        
      </div>
    </div>
    
    
      
   
    </HashRouter>
    </>

  )
}

export default App;
