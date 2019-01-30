import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Button }from 'reactstrap'
import { NavBar, cols } from '.'
import { EmployeeModal } from './employee.modal';

export class MainPage extends React.Component {
  state = {
    employees: [],
    employeeModalOpen: false,
    selectedEmp: null,
  }
  
  async componentWillMount() {
    const fetchRes = await fetch('http://localhost:8080/employees')
    const employees = await fetchRes.json()
    this.setState({ employees })
  }

  toggle(){
    this.setState({ employeeModalOpen: !this.state.employeeModalOpen })
  }

  render() {
    const { employees, employeeModalOpen, selectedEmp } = this.state;
  
    return (
      <div>
        { /* Modal */ }
        <EmployeeModal 
          newEmps={ 
            (emps) =>{ 
              this.setState({employees: emps}) 
            }}
          currentEmployee={selectedEmp} 
          open={ employeeModalOpen } 
          close={ () => this.toggle() } />

        { /* Components */ }
        <NavBar newEmps={ (emps) =>{ this.setState({employees: emps}) }} />
        <ReactTable 
          data={employees} 
          columns={cols}
          style={{cursor: 'pointer'}}
          getTrProps={ (state, rowInfo, column, instance) => ({
              onClick: () => this.setState({ selectedEmp: rowInfo.original, employeeModalOpen: true })
          })} />
        <Button 
          style={{ position: 'sticky', zIndex: '9999', bottom: '20px', left: '20px', backgroundColor: '#1f04d8ad', borderRadius: '25px'}} 
          onClick={ ()=>{ this.setState({ selectedEmp: null, employeeModalOpen: true }) } } >
          +
        </Button>
      </div>
    );
  }
}

