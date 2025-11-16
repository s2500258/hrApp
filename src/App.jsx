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

useEffect(() => {
    axios.get("http://localhost:3001/employees")
      .then((response) => {
        setEmployees(response.data);
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
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PersonList employees={employees} />} />
        <Route path="/about" element={<About />} />
        <Route path="/addemployee" element={<AddEmployee formData={formData} setFormData={setFormData} handleClick={handleClick} />} />
      </Routes>
      <Footer copyright={copyright} />
    </Router>
  )
}

export default App;
