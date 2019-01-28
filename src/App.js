import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends React.Component {
  state = {
    input: '',
    employees: []
  }
  
  componentWillMount = () => {
    fetch('http://localhost:8080/api/employees')
      .then(response => response.json())
      .then(employees => this.setState({ employees }))
  }


//   fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, cors, *same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//         "Content-Type": "application/json",
//         // "Content-Type": "application/x-www-form-urlencoded",
//     },
//     redirect: "follow", // manual, *follow, error
//     referrer: "no-referrer", // no-referrer, *client
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
// })
  async sendToServer(){

    console.log(await fetch('http://localhost:8080/api/add-employee/armi'))

  }

  render() {
    const { employees, input } = this.state;
  
    const cols = [
      {
        Header: 'ID',
        accessor: 'id',
        Cell: props => <span style={{color: props.row._original.color}}>{props.value}</span>
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Code',
        accessor: 'code'
      },
      {
        Header: 'Profession',
        accessor: 'profession'
      },
      {
        Header: 'City',
        accessor: 'city'
      },
      {
        Header: 'Branch',
        accessor: 'branch'
      },
      {
        Header: 'Assigned',
        accessor: 'assigned',
        Cell: props => <span>{ props.value ? 'Yes': 'No' }</span>
      }
    ]

    return (
      <div className="App">
        <h1>Plexxis Employees</h1>
        <ReactTable data={employees} columns={cols} />
        <input onChange={ (event) => { this.setState({ input: event.target.value }) } }/>
        <button onClick={ () => { this.sendToServer() } }> send </button>
      </div>
    );
  }
}

export default App;
