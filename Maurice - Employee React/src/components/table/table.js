import React from "react";
import "../table/table.css";
import Search from "../search/search";

const employees = [

    {
        "id": 1,
        "name": "Andrew smith",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "215-219-1477",
        "email": "mocivers@comcast.net",
        "dob": "11/09/1985"
    },
    {
        "id": 2,
        "name": "Adam David",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "610-764-0391",
        "email": "mania@gmail.com",
        "dob": "08/17/1973"
    },
    {
        "id": 3,
        "name": "Ken Edwardds",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 4,
        "name": "Sarah Jacobs",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-882-8851",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 5,
        "name": "Pam Spring",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-821-8549",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 6,
        "name": "Jack Jennings",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 7,
        "name": "Kelly Roma",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 8,
        "name": "Yolanda Tanner",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 9,
        "name": "Tiger Johns",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 10,
        "name": "Tim Dallas",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    }

];
class table extends React.Component {
    state = {
        employees: employees,
        filteredEmployee: employees,
        // sort: "descend"
    }


    // sortOrder = order => {
    //     if (this.state.sort === "descend") {
    //         this.setState({
    //             sort: "ascend"
    //         })
    //     } else {
    //         this.setState({
    //             sort: "descend"
    //         })
    //     }

    //     const sortByName = (a, b) => {
    //         if (this.state.order === "ascend") {
                
    //         } 

    //     }
    //     const sortedEmployees = this.state.filteredEmployee.sort(sortOrder);
    //     this.setState({ filteredUsers: sortedEmployees });
    // }

startSearch = e => {
    console.log(e.target.value);
    const searchValue = e.target.value; //Filtering the Employees Array
    console.log(this.state.employees);
    const employeeArray = this.state.employees;
    const employeeResult = employeeArray.filter(employee => {
        let employeeName = Object.values(employee.name).join("").toLowerCase()
        // let employeeName = employee.name
        console.log(employeeName.toLowerCase());
        // let test = Object.values(employeeName).join("").toLowerCase()
        // console.log(test)
        return employeeName.indexOf(searchValue.toLowerCase()) !== -1
    });
    console.log(employeeResult)
    this.setState({ filteredEmployee: employeeResult })
}
// componentDidMount() {
//       console.log(employees)
//       this.setState({
//         employees: employees,
//         filteredEmployee: employees
//       });
//   }
render() {
    return (
        <>
            <Search startSearch={this.startSearch} />

            <div className="card mt-4">
                {/* {this.startSearch()} */}
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name <button onClick={this.sortByName}>Sort</button></th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredEmployee.map(props => (
                            <tr key={props.id}>
                                <td className="image"><img alt={props.name} src={props.image} /></td>
                                <td>{props.name}</td>
                                <td>{props.phone}</td>
                                <td>{props.email}</td>
                                <td>{props.dob}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
}
}

export default table;