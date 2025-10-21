function Person(props) {
    return (
        <div className="person-card">
            <p>Name: {props.employee.name}</p>
            <p>Title: {props.employee.title}</p>
            <p>Salary: {props.employee.salary} euro</p>
            <p>Phone: {props.employee.phone}</p>
            <p>E-mail: {props.employee.email}</p>
            <p>Animal: {props.employee.animal}</p>
        </div>
    )
}

export default Person