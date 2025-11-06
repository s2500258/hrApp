import AnimalEmojis from './AnimalEmojis'

function findEmoji(animalName) {
    let search = AnimalEmojis.find(animal => animal.name.toLowerCase() === animalName.toLowerCase())
    
    if (search == undefined){
        search = { name: "Unknown", icon: "🐾" }
    }

    return (
        search
    )    
}

function skillString(arr){
    let string='';
    arr.map(item => 
            string = string + item + ', '
        )
    return (
        string.slice(0,-2)
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
    const upRound = Math.ceil(time)
    switch (true) {
        case (upRound-time < 0.2) && (upRound % 5 ===0):
            return (
                <p className="notion">🎉 Schedule recognition meeting</p>  ) 
            break;

        case time<0.5:
            return (
                <p className="notion">🔔 Schedule probation review</p>  )
            break;
        default:
            return (
                <></>  )
}
}

function PersonCard(props) {
    return (
        <div className="person-card">
            <p>Name: {props.employee.name}</p>
            <p>Title: {props.employee.title}</p>
            <p>Salary: {props.employee.salary} euro</p>
            <p>Phone: {props.employee.phone}</p>
            <p>E-mail: {props.employee.email}</p>
            <p>Animal: {props.employee.animal} {findEmoji(props.employee.animal).icon}</p>
            <p>Start date: {props.employee.startDate} (works {howLong(props.employee.startDate)} years) </p>
            {timeInform(howLong(props.employee.startDate))}
            <p>Location: {props.employee.location}</p>
            <p>Department: {props.employee.department}</p>
            <p>Skils: {skillString(props.employee.skills)}</p>
        </div>
    )
}

export default PersonCard;