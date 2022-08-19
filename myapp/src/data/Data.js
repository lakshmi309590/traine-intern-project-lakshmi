import React,{useState,useEffect} from 'react';
import './data.css';

function Dummy() {
  const [data,getData]=useState([]);
   const URL='https://dummyjson.com/users?limit=10&skip=80';

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
        <thead>
        <tr>
          <th>Name</th>
          <th>Last NAME</th>
          <th>Nick Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Address</th>
          <th>Mob Number</th>
          <th>user name</th>
          <th>password</th>
        </tr>
        </thead>
        <tbody>
        {data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.maidenName}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
              <td>{data.email}</td>
              <td>{data.address.address}</td>
              <td>{data.phone}</td>   
              <td>{data.username}</td>
              <td>{data.password}</td>



            </tr>
          )
        })}
        </tbody>
      </table>
    
  );
}



export default Dummy;