import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./form.css";
import { images } from '../../assets/images';
import {useEffect,useState} from 'react';



function Basicform(){

  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const[password,setPassword]=useState("");

  const handleChange=event => {
    setUsername(event.target.value);

    console.log("value is:",event.target.value);
  };


  const handleChange2=event =>{
    setPassword(event.target.value);

    console.log("value is:",event.target.value);
  };


  function loginClick (){
      if(username==="admin" && password==="admin"){
        navigate("/AddFrame")
      }
    }
  return (
    
    <section>
      <div className='image'>
      <img src={images.loginBg} alt="bg"></img>

      </div>
      <div className='contentbx'>
        <div className='formBx'>
          <h2>Login your Account</h2>
          <form>
            <div className='inputBx'>
              
              <span>Username</span>
              <input type="text" name=""  onChange={handleChange}></input>
            
            </div>

            <div className='inputBx'>
              <span>Password</span>
              <input type="password" name="" onChange={handleChange2}></input>
            </div>
          
            <nav id="lognav">
            <input type="submit" onClick={loginClick} value="submit" id=" logbutton"/>
            </nav>
            <div className='inputBx'>
             <Link to="/Forgot"> <p>Forgot Password</p></Link>
            </div>
          </form>
        </div>
      </div>
      
    </section>
        
    
    
  );
}

export default Basicform;
