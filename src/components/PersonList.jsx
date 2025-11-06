import PersonCard from "./PersonCard";

function PersonList(props) {
    return (
      <main>
        {props.employees.map((employee)=>(
            <PersonCard employee={employee} key={employee.id}/>  
            )
        )}
      </main>
    )
};

export default PersonList;