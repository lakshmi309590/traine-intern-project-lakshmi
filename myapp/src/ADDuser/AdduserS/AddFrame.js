import React from 'react';
import "./AddFrame.css"
import { Link } from 'react-router-dom';
import New from '../../USER DETAILS/First/New';

import Form from '../formpage/Form';
import Dummy from '../../data/Data';
function AddFrame(){
    return(
        <div  className='container'>
           <div className='New'>
                 <New/>
                 
                
            </div>
             <div className='Top'>
                
             <div  className='btn1'>

            
              <button>logout</button>
        
           </div>
           </div>
             
            <div className='Head'>
                 <div className='p'> 
                <p>Welcome</p><br>
                
                </br>
               
                
               
               </div> 
                <div className='Content'>
                    <Dummy/>
                </div>
               
            </div>
           
            
     </div>  
    )

}


export default AddFrame;
      
  
          
      
   