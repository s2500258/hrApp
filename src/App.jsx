import About from './components/About';
import AddEmployee from './components/AddEmployee';
import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import PersonList from './components/PersonList';
import data from "./data";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

const copyright="Copyrights by WP25K";
const [employees, setEmployees] = useState (data);

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
    setEmployees([...employees, {
      id: Date.now(),
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
    }]);
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
