import React,{useState,useEffect} from 'react';
import './data.css';

function Dummy() {
  const [data,getData]=useState([]);
   const URL='https://dummyjson.com/users?limit=10&skip=80';
   const[show,setshow]=useState(true)

   useEffect(() => {
       fetchData()
   }, [])

   const fetchData = () => {
    fetch(URL)
      .then((res) =>
          res.json())
      .then((response) => {
          console.log("data-->",response);
          if(response){
            getData(response.users&&response.users);
          }
        })
   }
    
  return (
    
      <table >
       <div className='Hide'> <button  onClick={()=>setshow(true)}>show</button>
        <button onClick={()=>setshow(false)}>hide</button></div>
        <thead>
        <tr>
          <th>Name</th>
          <th>Last NAME</th>
          {
          show?<th>Nick Name</th>:null
        }
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Address</th>
          <th>Mob Number</th>
          <th>user name</th>
          {
          show?<th>password</th>:null
        }
        </tr>
        </thead>
        <tbody>
        {data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              {
          show?<td>{data.maidenName}</td>:null
        }
              <td>{data.age}</td>
              <td>{data.gender}</td>
              <td>{data.email}</td>
              <td>{data.address.address}</td>
              <td>{data.phone}</td>   
              <td>{data.username}</td>
              {
          show?<td>{data.password}</td>:null
        }



            </tr>
          )
        })}
        </tbody>
      </table>
    
  );
}



export default Dummy;