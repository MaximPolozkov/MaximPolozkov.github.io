import React from "react";
import "./Login.scss";

const Login = () => {
    return(
        <div className="wrapperLogin">
            <div className="form">
      <div className="title">Добро пожаловать</div>
      <div className="subtitle">Давайте создадим вашу учетную запись!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">Имя</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Отчество</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Электронная почта</label>
      </div>
      <button type="text" className="submit">Отправить</button>
    </div>
        </div>
    )
    
}

export default Login;