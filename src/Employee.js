function Employee ({EmployeeData}) {
    return <div class="EmployeeDiv">
        <img class="avatar" src={EmployeeData.avatar}/>
        <div>
        <h2>{EmployeeData.name}</h2>
        
        <p>
            <strong>email: </strong>
            {EmployeeData.email}
        </p>
        <p>
            <strong>phone: </strong>
            {EmployeeData.phone}
        </p>
        <p>
            <strong>skills: </strong>
            {EmployeeData.skills}
        </p>
        </div>
    </div>
}
export default Employee;