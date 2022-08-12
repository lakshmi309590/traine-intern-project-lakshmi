import React from 'react';

import "./form.css";
import { images } from '../../assets/images';


const Basicform = () => {
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
              <input type="text" name=""></input>
            
            </div>
            <div className='inputBx'>
              <span>Password</span>
              <input type="password" name=""></input>
            </div>
            <div className='inputBx'>
              <input type="submit" value="Login" name=''></input>
            </div>
            <div className='inputBx'>
              <p>Forgot Password<a href='#'></a></p>
            </div>
          </form>
        </div>
      </div>
      
    </section>
        
    
    
  );
}

export default Basicform;
