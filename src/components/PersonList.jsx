import PersonCard from "./PersonCard";

function PersonList(props) {
    return (
      <>
        {props.employees.map((employee)=>(
            <PersonCard employee={employee} key={employee.id}/>  
            )
        )}
      </>
    )
};

export default PersonList;