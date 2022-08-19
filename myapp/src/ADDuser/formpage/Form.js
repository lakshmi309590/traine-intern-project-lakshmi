import React from 'react';
import "./Form.css"
import { Link } from 'react-router-dom';
import New from '../../USER DETAILS/First/New';

function Form(){
    return(
         <div  className='container2'>
            
         <div className='New'>
             <New/>
            
         </div>
         <div className='Top'>
            

         </div>
            <div className='Head1'>
                
            
            <div className="Form1">
                <form>
                    
                First Name*:<input  type="text" placeholder="enter your first name"></input>
                <br/>
                <br/>
                Last Name*:<input type="text" placeholder="enter your last name"></input>
                <br/>
                <br/>
                
                Nick Name*:<input type="text" placeholder="enter your nick name"></input>
                <br/>
                <br/>
                DoB*:<input type="text" placeholder="enter your date of birth"></input>
                <br/>
                <br/>
                Gender*:male<input type="radio" name="male"></input>Female<input type="radio" name="female"></input>
                <br/>
                <br/>
                Email*:<input type="text" placeholder="enter your Email id"></input>
                <br/>
                <br/>
                Password*:<input type="password" placeholder="password"></input>
                <br/>
                <br/>

                </form>
                <div className="Form2">
                    <form>
                    Address*:<input className="Address" type="text" placeholder="enter your Address"></input>
                <br/>
                <br/>
                Contact NO*:<input type="number" placeholder="enter your Contact"></input>
                <br/>
                <br/>
                Status*:single<input type="radio" name="single"></input>married<input type="radio" name="married"></input>
                <br/>
                <br/>
                                
                <Link to="/Home"><p className="Submit">Submit</p></Link>
                    </form>
                </div>
            </div>
        </div>


            </div>
        
    
    )

}


export default Form;
      
  
          
      
   