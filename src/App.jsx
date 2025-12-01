import About from './components/About';
import AddEmployee from './components/AddEmployee';
import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import PersonList from './components/PersonList';
import data from "./data";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { _get, _post, _put } from './hooks/useAxios';

function App() {

const copyright="Copyrights by WP25K";
const [employees, setEmployees] = useState ([]);
const [originalEmployees, setOriginalEmployees] = useState([]);

// useEffect(() => {
//     axios.get("http://localhost:3001/employees")
//       .then((response) => {
//         const updatedList = response.data.map(employee => ({
//             ...employee,
//             isEditing: false
//           }));
//         setEmployees(updatedList);
//         setOriginalEmployees(updatedList);  
//       });
//   }, []);

const fetchData = async () => {
    try {
      const response = await _get("/employees", {headers: {}});
      setEmployees(response.data);
      setOriginalEmployees(response.data);
    } catch(error) {
      console.log("Error fetching data", error)
    }
};

useEffect(() => {
  fetchData()
},[]);


const [formData, setFormData] = useState({
    "name": "",
    "title": "",
    "salary": "",
    "phone": "",
    "email": "",
    "animal": "",
    "startDate": "",
    "location": "",
    "department": "",
    "skills": ""
  });

  // const handleClick = () => {
  //   axios.post("http://localhost:3001/employees", {
  //     id: String(employees.length+1),
  //     name: formData.name,
  //     title: formData.title,
  //     salary: formData.salary,
  //     phone: formData.phone,
  //     email: formData.email,
  //     animal: formData.animal,
  //     startDate: formData.startDate,
  //     location: formData.location,
  //     department: formData.department,
  //     skills: formData.skills.split(",")
  //   }).then((response) => {setEmployees([...employees,response.data])
  //   });
  // };

const handleCreate = async () => {
  try {
    const newEmployee = {
      id: String(employees.length+1),
      name: formData.name,
      title: formData.title,
      salary: formData.salary,
      phone: formData.phone,
      email: formData.email,
      animal: formData.animal,
      startDate: formData.startDate,
      location: formData.location,
      department: formData.department,
      skills: formData.skills.split(",")
    };
    const response = await _post("http://localhost:3001/employees", newEmployee);
    setEmployees(prev => [...prev, newEmployee]);
    setOriginalEmployees(prev => [...prev, newEmployee]);
  } catch (error) {
    console.error("POST failed:", error);
  }
};

  const handleEditButton = (id) => {
      setEmployees(employees.map(employee => 
        employee.id===id ? {...employee, isEditing: !employee.isEditing} : employee
      ));
  };

  const handleFieldChange = (id, fieldName, value) => {
      setEmployees(prev =>
        prev.map(employee =>
            employee.id === id
                ? { ...employee, [fieldName]: value.split(", ") }
                : employee
        )
    );
  };

  const handleCancel = (id) => {
    const original = originalEmployees.find(employee => employee.id === id);
    setEmployees(prev =>
      prev.map(employee =>
        employee.id === id
          ? { ...original, isEditing: false }
          : employee
      )
    );
  };

const handleSaveEmployee = async (id) => {
  try {
    const employee = employees.find(emp => emp.id === id);
    const response = await _put(`http://localhost:3001/employees/${id}`, employee);

    // The updated employee from API
    const updatedEmployee = response.data;

    // Update Employees
    setEmployees(prev =>
      prev.map(emp =>
        emp.id === id ? { ...emp, isEditing: false } : emp
      )
    );

    // Update OriginalEmployees
    setOriginalEmployees(prev =>
      prev.map(emp =>
        emp.id === id ? { ...employee }  : emp
      )
    );

    showToast("Employee saved!");

  } catch (err) {
    console.error("Error updating employee", err);
  }
};

  const handleSave = (id) => {
    const employee = employees.find(emp => emp.id === id);
    axios.put(`http://localhost:3001/employees/${id}`, {
      id: employee.id,
      name: employee.name,
      title: employee.title,
      salary: employee.salary,
      phone: employee.phone,
      email: employee.email,
      animal: employee.animal,
      startDate: employee.startDate,
      location: employee.location,
      department: employee.department,
      skills: employee.skills
    })
      .then(() => {
    setEmployees(prev =>
        prev.map(emp =>
        emp.id === id
          ? { ...emp, isEditing: false }
          : emp
      )
    );
    setOriginalEmployees(prev =>
      prev.map(emp =>
        emp.id === id
          ? { ...employee }  
          : emp
      )
    );
  })
  .catch(err => console.error(err));
  showToast("Employee updated successfully");
};

const [toast, setToast] = useState("");

const showToast = (msg) => {
  setToast(msg);
  setTimeout(() => setToast(""), 2000);  
};

  return (
    
    
    <Router>
      <Header />
      {toast && ( <div className="toast">{toast}</div>)}
      <Routes>
        <Route path="/" element={<PersonList employees={employees} handleEditButton={handleEditButton} 
          handleFieldChange={handleFieldChange} handleCancel={handleCancel} handleSave={handleSaveEmployee} />} />
        <Route path="/about" element={<About />} />
        <Route path="/addemployee" element={<AddEmployee formData={formData} setFormData={setFormData} handleClick={handleCreate} />} />
      </Routes>
      <Footer copyright={copyright} />
    </Router>
  )
}

export default App;
