import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { _post } from "../hooks/useAxios";

function AddEmployee( { formData, setFormData, handleClick } ) {

  const handleChange = (e) => {
    setFormData((prevState) => {
        return {
        ...prevState, [e.target.name]: e.target.value }
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    setFormData({
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
    navigate("/");
  };
    
  return (
      <main>
        <div>
<form className="form" onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input
          id="name"
          name="name"
          className="input"
          value={formData.name}
          onChange={handleChange}
    />
    <label htmlFor="title">Title:</label>
    <input
          id="title"
          name="title"
          className="input"
          value={formData.title}
          onChange={handleChange}
    />
    <label htmlFor="salary">Salary:</label>
    <input
          id="salary"
          name="salary"
          className="input"
          value={formData.salary}
          onChange={handleChange}
    />
    <label htmlFor="phone">Phone:</label>
    <input
          id="phone"
          name="phone"
          className="input"
          value={formData.phone}
          onChange={handleChange}
    />
    <label htmlFor="email">E-mail:</label>
    <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
    />
    <label htmlFor="animal">Animal:</label>
    <input
          id="animal"
          name="animal"
          className="input"
          value={formData.animal}
          onChange={handleChange}
    />
    <label htmlFor="startDate">Start Date:</label>
    <input
          id="startDate"
          name="startDate"
          className="input"
          value={formData.startDate}
          onChange={handleChange}
    />
    <label htmlFor="location">Location:</label>
    <input
          id="location"
          name="location"
          className="input"
          value={formData.location}
          onChange={handleChange}
    />
    <label htmlFor="department">Department:</label>
    <input
          id="department"
          name="department"
          className="input"
          value={formData.department}
          onChange={handleChange}
    />
    <label htmlFor="skills">Skills:</label>
    <input
          id="skills"
          name="skills"
          className="input"
          value={formData.skills}
          onChange={handleChange}
    />
    <button type="submit">Add employee</button>
</form>
</div>
      </main>
  )
}

export default AddEmployee;