import React from 'react';
import images  from '../../assets/images/forgot_pass.jpg';
import "./forgot.css";
import { Link } from 'react-router-dom';



const ForgotPass = () => {
  return (
    
    <section>
      <div className='image'>
      <img src={images}></img>

      </div>
      <div className='contentbx'>
        <div className='formBx'>
          <h2>Forgot Password</h2>
           <p>Enter your email and we'll send you a link to reset your password</p>
          <form>
            <div className='inputBx'>
              
              <span>Email Address</span>
              <input type="text" name=""></input>
              
            </div>
            
            <div className='inputBx'>
             <Link to="/Home"><input type="submit" value="submit" name=''></input></Link>
            </div>
            
          </form>
        </div>
      </div>
      
    </section>
        
    
    
  );
}

export default ForgotPass;
