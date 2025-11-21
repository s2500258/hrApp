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

function App() {

const copyright="Copyrights by WP25K";
const [employees, setEmployees] = useState ([]);
const [originalEmployees, setOriginalEmployees] = useState([]);

useEffect(() => {
    axios.get("http://localhost:3001/employees")
      .then((response) => {
        const updatedList = response.data.map(employee => ({
            ...employee,
            isEditing: false
          }));
        setEmployees(updatedList);
        setOriginalEmployees(updatedList);  
      });
  }, []);

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

  const handleClick = () => {
    axios.post("http://localhost:3001/employees", {
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
    }).then((response) => {setEmployees([...employees,response.data])
    })
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
    // update local state to exit editing mode
        setEmployees(prev =>
        prev.map(emp =>
        emp.id === id
          ? { ...emp, isEditing: false }
          : emp
      )
    );

    // also update the original backup
    setOriginalEmployees(prev =>
      prev.map(emp =>
        emp.id === id
          ? { ...employee }  // new saved version becomes original
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
          handleFieldChange={handleFieldChange} handleCancel={handleCancel} handleSave={handleSave} />} />
        <Route path="/about" element={<About />} />
        <Route path="/addemployee" element={<AddEmployee formData={formData} setFormData={setFormData} handleClick={handleClick} />} />
      </Routes>
      <Footer copyright={copyright} />
    </Router>
  )
}

export default App;
