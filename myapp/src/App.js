import React from 'react';
import {link} from "react-router-dom"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import ForgotPass from "./Components/forgotPass/forgot"
import AddFrame from './ADDuser/AdduserS/AddFrame';
import Form from './ADDuser/formpage/Form';
import Data from './data/Data';
import Home from './Components/home/Home';
import Basicform from './Components/forms/basicform';



function App() {
  return (
    <div  className='App'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Basicform />}/>
        <Route path="/AddFrame" element={<AddFrame />}/>
        <Route path="/Form"  element={<Form/>}/>
        <Route path="/Forgot" element={<ForgotPass />}/>
        <Route path="/Home" element={<Home/>}/>
      
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;