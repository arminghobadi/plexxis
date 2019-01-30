import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const INIT_STATE = {
  name: '',
  code: '',
  profession: '',
  color: '',
  city: '',
  branch: '',
  assigned: '',
}

export class EmployeeModal extends React.Component {
  state = INIT_STATE

  static getDerivedStateFromProps(props, state) {
    if (props.currentEmployee !== state.pe){
      return {
        ...(props.currentEmployee || INIT_STATE),
        pe: props.currentEmployee
      }
    }
    
  }

  async addEmployee() {
    const { name, code, profession, color, city, branch, assigned } = this.state
    const employeeInfo = { name, code, profession, color, city, branch, assigned }
    const fetchRes = await fetch(`http://localhost:8080/add-employee/emp`, 
    { 
      method: 'POST', 
      body: JSON.stringify(employeeInfo),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const allEmps = await fetchRes.json()
    this.props.newEmps(allEmps)
  }

  createForm(fields){
    return fields.reduce( (acc, field) => {
      acc.push(
        <FormGroup row >
          <Label sm={2}>{field}:</Label>
          <Col sm={10}>
            <Input type='text' value={this.state[field]} id={[field]} placeholder={`Input ${field}`} onChange={(event) => { this.setState({ [field]: event.target.value }) }} />
          </Col>
        </FormGroup>
      )
      return acc
    },[])
  }

  async updateEmployee(){
    const { name, code, profession, color, city, branch, assigned } = this.state;
    const employeeInfo = { id: this.props.currentEmployee.id ,name, code, profession, color, city, branch, assigned }
    const fetchRes = await fetch(`http://localhost:8080/edit-employee/emp`, 
    { 
      method: 'POST', 
      body: JSON.stringify(employeeInfo),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const allEmps = await fetchRes.json()
    this.props.newEmps(allEmps)
  }

  async deleteEmployee(){
    const employeeInfo = { id: this.props.currentEmployee.id }
    const fetchRes = await fetch(`http://localhost:8080/remove-employee/emp`, 
    { 
      method: 'POST', 
      body: JSON.stringify(employeeInfo),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const allEmps = await fetchRes.json()
    this.props.newEmps(allEmps)
  }
  

  render() {
    const { open, close, currentEmployee } = this.props
    
    return (
      <Modal isOpen={open} toggle={close} >
        <ModalHeader>{ currentEmployee ? 'Edit Employee' : 'Add New Employee'}</ModalHeader>
        <ModalBody>
          <Form>
            {this.createForm(['name', 'code', 'profession', 'color', 'city', 'branch'])}
            <FormGroup row>
              <Label sm={2}>Assigned:</Label>
              <Col sm={10}>
                <Input value={this.state.assigned} type="select" name="select" id="assigned" onChange={ (event) => { this.setState({assigned: event.target.value}) } } >
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {
            currentEmployee ?
              <div>
                <Button color='danger' onClick={ async () => { this.deleteEmployee(); close() } } >Delete Employee</Button>{' '}
                <Button color='primary' onClick={ async () => { this.updateEmployee(); close() } } >Update Employee</Button>
              </div>
            :
              <Button color='primary' onClick={ async () => { this.addEmployee(); close() } } >Add Employee</Button>
          }
          
          <Button color='secondary' onClick={ () => { close() } }>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
