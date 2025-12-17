import AnimalEmojis from './AnimalEmojis';
import { useState, useEffect } from "react";
// import Button from '@mui/material/Button';
import { _put } from '../hooks/useAxios';
import styles from './PersonCard.module.css';

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";

function findEmoji(animalName) {
    let search = AnimalEmojis.find(animal => animal.name.toLowerCase() === animalName.toLowerCase());
    
    if (search == undefined){
        search = { name: "Unknown", icon: "🐾" }
    }

    return (
        search
    )    
}

function howLong(dateToCheck){
    const startDate = new Date(dateToCheck);
    const now = new Date();
    const diffMs = now - startDate; // difference in milliseconds  
    const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
    return (
        diffYears.toFixed(2)
    )
}

function timeInform(time){
    const upRound = Math.ceil(time);
    let informer = '';
    switch (true) {
        case (upRound-time < 0.2) && (upRound % 5 ===0):
            informer = "🎉 Schedule recognition meeting";
            break;
        case time<0.5:
            informer = "🔔 Schedule probation review";
            break;
        default:
            informer = "";   
    }
    return (
                //  <p className={styles.notion}>{informer}</p> 
                <Typography sx={{ fontWeight: "bold", color: "red" }}>{informer}</Typography> 
    )
}



function PersonCard(props) {

const handleChange = (e) => {
        const fieldName = e.target.name;   // "salary" or "phone"
        const value = e.target.value;

        props.handleFieldChange(props.employee.id, fieldName, value);
    };

 const { employee, handleEditButton, handleSave, handleCancel } = props;
    
    return (

    <Card sx={{ maxWidth: 500, margin: "1rem auto", padding: 2 }}>
      <CardContent sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    }}>
        {/* Name */}
        <Typography variant="h6" sx={{ mb: 1 }}>
          Name: {employee.name}
        </Typography>

        {/* Title */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>Title:</Typography>
          <Typography>{employee.title}</Typography>
        </Stack>

        {/* Salary */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>Salary:</Typography>

          {employee.isEditing ? (
            <TextField
              size="small"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                height: "24px",
                 }}}
            />
          ) : (
            <Typography>{employee.salary} euros</Typography>
          )}
        </Stack>

        {/* Phone */}
        <Typography sx={{ mb: 1 }}>
          Phone: {employee.phone}
        </Typography>

        {/* Email */}
        <Typography sx={{ mb: 1 }}>
          E-mail: {employee.email}
        </Typography>

        {/* Animal */}
        <Typography sx={{ mb: 1 }}>
          Animal: {employee.animal} {findEmoji(employee.animal).icon}
        </Typography>

        {/* Start date */}
        <Typography sx={{ mb: 1 }}>
          Start date: {employee.startDate} (works{" "}
          {howLong(employee.startDate)} years)
        </Typography>

        {/* Location */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>Location:</Typography>
          {employee.isEditing ? (
            <TextField
              size="small"
              name="location"
              value={employee.location}
              onChange={handleChange}
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                height: "24px",
                 }}}
            />
          ) : (
            <Typography>{employee.location}</Typography>
          )}
        </Stack>

        {/* Department */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>Department:</Typography>
          {employee.isEditing ? (
            <TextField
              size="small"
              name="department"
              value={employee.department}
              onChange={handleChange}
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                height: "24px",
                 }}}
            />
          ) : (
            <Typography>{employee.department}</Typography>
          )}
        </Stack>

        {/* Skills */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>Skills:</Typography>
          {employee.isEditing ? (
            <TextField
              size="small"
              name="skills"
              value={employee.skills.join(", ")}
              onChange={handleChange}
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                height: "24px",
                 }}}
            />
          ) : (
            <Typography>{employee.skills.join(", ")}</Typography>
          )}
        </Stack>

        {/* Extra time info */}
        {/* <Typography sx={{ my: 1 }}> */}
          {timeInform(howLong(employee.startDate))}
        {/* </Typography> */}

        {/* Action buttons */}
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          {employee.isEditing ? (
            <>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleSave(employee.id)}
              >
                Save details
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={() => handleCancel(employee.id)}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              onClick={() => handleEditButton(employee.id)}
            >
              Edit details
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>

        // <div className={styles.personCard}>
        //     <p>Name: {props.employee.name}</p>
        //     <div className={styles.cardLine}>
        //     <p className={styles.lineName}>Title:</p><p className={styles.lineParam}>{props.employee.title}</p>    
        //     </div>
        //     {/* Salary: */}
        //     <div className={styles.cardLine}>
        //         <p className={styles.lineName}>Salary:</p>    
        //         {props.employee.isEditing 
        //         ? <input type="text" name="salary" value={props.employee.salary } 
        //         className={styles.input} onChange={handleChange} />
        //         : <p className={styles.lineName}>{props.employee.salary} euros</p>}
        //     </div>

        //     <p>Phone: {props.employee.phone}</p>
        //     <p>E-mail: {props.employee.email}</p>
        //     <p>Animal: {props.employee.animal} {findEmoji(props.employee.animal).icon}</p>
        //     <p>Start date: {props.employee.startDate} (works {howLong(props.employee.startDate)} years) </p>
        //     {/* Location: */}
        //     <div className={styles.cardLine}>
        //         <p className={styles.lineName}>Location:</p>    
        //         {props.employee.isEditing 
        //         ? <input type="text" name="location" value={props.employee.location } 
        //         className={styles.input} onChange={handleChange} />
        //         : <p className={styles.lineName}>{props.employee.location}</p>}
        //     </div>            
        //     {/* Department: */}
        //     <div className={styles.cardLine}>
        //         <p className={styles.lineName}>Department:</p>    
        //         {props.employee.isEditing 
        //         ? <input type="text" name="department" value={props.employee.department } 
        //         className={styles.input} onChange={handleChange} />
        //         : <p className={styles.lineName}>{props.employee.department}</p>}
        //     </div>         

        //     {/* Skills: */}
        //     <div className={styles.cardLine}>
        //         <p className={styles.lineName}>Skills:</p>    
        //         {props.employee.isEditing 
        //         ? <input type="text" name="skills" value={props.employee.skills.join(", ") } 
        //         className={styles.input} onChange={handleChange} />
        //         : <p className={styles.lineName}>{props.employee.skills.join(", ") }</p>}
        //     </div>           

        //     {timeInform(howLong(props.employee.startDate))}

        //     <div className={styles.cardLine}>
        //     {props.employee.isEditing 
        //         ? <>    
        //         <button className={styles.editButton} onClick={()=>
        //         props.handleSave(props.employee.id)}>Save details</button>
        //         <button className={styles.cancelButton} onClick={()=>
        //         props.handleCancel(props.employee.id)}>Cancel</button>
        //         </>
        //         : <button className={styles.editButton} onClick={()=>
        //         props.handleEditButton(props.employee.id)}>Edit details</button>}
        //     </div>
        // </div>
    )
}

export default PersonCard;