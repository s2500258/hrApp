import AnimalEmojis from './AnimalEmojis';
import { useState, useEffect } from "react";

import { _put } from '../hooks/useAxios';

function findEmoji(animalName) {
    let search = AnimalEmojis.find(animal => animal.name.toLowerCase() === animalName.toLowerCase())
    
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
                 <p className="notion">{informer}</p>    )
}

function PersonCard(props) {

    const handleChange = (e) => {
        const fieldName = e.target.name;   // "salary" or "phone"
        const value = e.target.value;

        props.handleFieldChange(props.employee.id, fieldName, value);
    };

    return (
        <div className="person-card">
            <p>Name: {props.employee.name}</p>
            <div className="card-line">
            <p className="line-name">Title:</p><p className="line-param">{props.employee.title}</p>    
            </div>
            {/* Salary: */}
            <div className="card-line">
                <p className="line-name">Salary:</p>    
                {props.employee.isEditing 
                ? <input type="text" name="salary" value={props.employee.salary } 
                className="input" onChange={handleChange} />
                : <p className="line-name">{props.employee.salary} euros</p>}
            </div>

            <p>Phone: {props.employee.phone}</p>
            <p>E-mail: {props.employee.email}</p>
            <p>Animal: {props.employee.animal} {findEmoji(props.employee.animal).icon}</p>
            <p>Start date: {props.employee.startDate} (works {howLong(props.employee.startDate)} years) </p>
            {/* Location: */}
            <div className="card-line">
                <p className="line-name">Location:</p>    
                {props.employee.isEditing 
                ? <input type="text" name="location" value={props.employee.location } 
                className="input" onChange={handleChange} />
                : <p className="line-name">{props.employee.location}</p>}
            </div>            
            {/* Department: */}
            <div className="card-line">
                <p className="line-name">Department:</p>    
                {props.employee.isEditing 
                ? <input type="text" name="department" value={props.employee.department } 
                className="input" onChange={handleChange} />
                : <p className="line-name">{props.employee.department}</p>}
            </div>         

            {/* Skills: */}
            <div className="card-line">
                <p className="line-name">Skills:</p>    
                {props.employee.isEditing 
                ? <input type="text" name="skills" value={props.employee.skills.join(", ") } 
                className="input" onChange={handleChange} />
                : <p className="line-name">{props.employee.skills.join(", ") }</p>}
            </div>           

            {timeInform(howLong(props.employee.startDate))}

            <div className="card-line">
            {props.employee.isEditing 
                ? <>    
                <button className="edit-button" onClick={()=>
                props.handleSave(props.employee.id)}>Save details</button>
                <button className="cancel-button" onClick={()=>
                props.handleCancel(props.employee.id)}>Cancel</button>
                </>
                : <button className="edit-button" onClick={()=>
                props.handleEditButton(props.employee.id)}>Edit details</button>}
            </div>
        </div>
    )
}

export default PersonCard;