//import {StrictMode} from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import './index.scss';


import spisok from './spisok_array';
import { StrictMode } from 'react';



//const rootElement = document.getElementById('root');
//const root = createRoot(rootElement);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <App spisok={spisok} />
  </StrictMode>
  
);




