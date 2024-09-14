import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  var count =1;
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className='div'>
     
     <h1>Employee List</h1>
    <table>
      <thead>
        
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Department</th>
        
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{count++}</td>
            <td>{employee.Name}</td>
            <td>{employee.Salary}</td>
            <td>{employee.Department}</td>
          </tr>
        ))}
          
       
      </tbody>
    </table>


      {/* <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <h2>{employee.Name}</h2>
            <p>Salary: {employee.Salary}</p>
            <p>Department: {employee.Department}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
