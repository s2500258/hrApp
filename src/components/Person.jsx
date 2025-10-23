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

function Person(props) {
    return (
        <div className="person-card">
            <p>Name: {props.employee.name}</p>
            <p>Title: {props.employee.title}</p>
            <p>Salary: {props.employee.salary} euro</p>
            <p>Phone: {props.employee.phone}</p>
            <p>E-mail: {props.employee.email}</p>
            <p>Animal: {props.employee.animal} {findEmoji(props.employee.animal).icon}</p>
        </div>
    )
}

export default Person