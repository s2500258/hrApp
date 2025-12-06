import { useNavigate } from "react-router-dom";
// import styles from './AddEmployee.module.css';
import { _post } from "../hooks/useAxios";
import { TextField, Button, Box } from "@mui/material";

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
      <main style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "top",
            minHeight: "100vh",
      }}>
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                  display: "grid",
                  gap: "8px",
                  "& .MuiTextField-root": { margin: 0 }, 
                  width: 400,
                  "& .MuiInputBase-root": {
                  height: "38px"}
            }}
            >
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        size="small"
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Title"
        name="title"
        value={formData.title}
        size="small"
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Salary"
        name="salary"
        value={formData.salary}
        size="small"
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        size="small"
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="E-mail"
        name="email"
        value={formData.email}
        size="small"
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Animal"
        name="animal"
        value={formData.animal}
        size="small"
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        value={formData.startDate}
        size="small"
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />

      <TextField
        label="Location"
        name="location"
        value={formData.location}
        size="small"
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Department"
        name="department"
        value={formData.department}
        size="small"
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Skills"
        name="skills"
        value={formData.skills}
        size="small"
        onChange={handleChange}
        fullWidth
      />

      <Button type="submit" variant="contained">
        Add employee
      </Button>
    </Box>
{/* <form className={styles.form} onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input
          id="name"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
    />
    <label htmlFor="title">Title:</label>
    <input
          id="title"
          name="title"
          className={styles.input}
          value={formData.title}
          onChange={handleChange}
    />
    <label htmlFor="salary">Salary:</label>
    <input
          id="salary"
          name="salary"
          className={styles.input}
          value={formData.salary}
          onChange={handleChange}
    />
    <label htmlFor="phone">Phone:</label>
    <input
          id="phone"
          name="phone"
          className={styles.input}
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
          className={styles.input}
          value={formData.animal}
          onChange={handleChange}
    />
    <label htmlFor="startDate">Start Date:</label>
    <input
          id="startDate"
          name="startDate"
          className={styles.input}
          value={formData.startDate}
          onChange={handleChange}
    />
    <label htmlFor="location">Location:</label>
    <input
          id="location"
          name="location"
          className={styles.input}
          value={formData.location}
          onChange={handleChange}
    />
    <label htmlFor="department">Department:</label>
    <input
          id="department"
          name="department"
          className={styles.input}
          value={formData.department}
          onChange={handleChange}
    />
    <label htmlFor="skills">Skills:</label>
    <input
          id="skills"
          name="skills"
          className={styles.input}
          value={formData.skills}
          onChange={handleChange}
    />
    <button type="submit">Add employee</button>
</form> */}

      </main>
  )
}

export default AddEmployee;