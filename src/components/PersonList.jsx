import PersonCard from "./PersonCard";

function PersonList(props) {

    return (
      <main>
        {props.employees.map((employee)=>(
            <PersonCard employee={employee} key={employee.id} handleEditButton={props.handleEditButton} 
            handleFieldChange={props.handleFieldChange} handleCancel={props.handleCancel} handleSave={props.handleSave} />  
            )
        )}
      </main>
    )
};

export default PersonList;