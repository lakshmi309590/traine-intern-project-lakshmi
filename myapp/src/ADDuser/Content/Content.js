import React from 'react';
import './content.css';
  
 const data = [
  { name: "Anom", nickname:"anu" ,dateOfbirth: "19-jun-1987", startdate:"12-aug-2021", gender: "Male" ,email:"john@gmail.com",address:"lkslxjjj nagar,1st block",mobnumber:"+916777777",status:"active"},
   {name: "Amritha", nickname:"ammu" ,dateOfbirth: "26-dec-1987", startdate:"30-nov-2021", gender: "feMale" ,email:"xner@gmail.com",address:"bsghjytyy nagar,1st block",mobnumber:"+9167773872",status:"in active"},
   { name: "manu", nickname:"manu" ,dateOfbirth: "11-feb-1987", startdate:"6-sep-2021", gender: "Male" ,email:"skkn@gmail.com",address:"ahhtbbaya nagar,1st block",mobnumber:"+913877777",status:"active"},
 ]
  
function Content() {
  return (
    <div className="customers">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Nick Name</th>
          <th>Date of Birth</th>
          <th>Start Date</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Address</th>
          <th>Mob Number</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.nickname}</td>
              <td>{val.dateOfbirth}</td>
              <td>{val.startdate}</td>
              <td>{val.gender}</td>
              <td>{val.email}</td>
              <td>{val.address}</td>
              <td>{val.mobnumber}</td>   
              <td>{val.status}</td>



            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}


  
export default Content;