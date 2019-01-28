import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class NewEmployeeModal extends React.Component {
  state = {
    id: this.props.nextId,
    name: '',
    code: '',
    profession: '',
    color: '',
    city: '',
    branch: '',
    assigned: ''
  }

  componentWillMount = () => {
    fetch('http://localhost:8080/employees')
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
  async sendToServer() {

    console.log(await fetch('http://localhost:8080/api/add-employee/armi'))

  }

  render() {
    const { id, name, code, profession, color, city, branch, assigned } = this.state;
    const { open, close } = this.props

    return (
      <Modal isOpen={open} toggle={close} className='newEmployeeModal'>
        <ModalHeader>Add New Employee</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="id">ID:</Label>
              <Input type="textarea" name="id" id="employeeId" placeholder={id} />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="textarea" name="name" id="name" placeholder="name" />
            </FormGroup>
            <FormGroup>
              <Label for="code">Code</Label>
              <Input type="textarea" name="select" id="code"/>
            </FormGroup>
            <FormGroup>
              <Label for="profession">Profession</Label>
              <Input type="textarea" name="select" id="professsion"/>
            </FormGroup>
            <FormGroup>
              <Label for="color">Color</Label>
              <Input type="textarea" name="select" id="color"/>
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="textarea" name="select" id="city"/>
            </FormGroup>
            <FormGroup>
              <Label for="branch">Branch</Label>
              <Input type="textarea" name="select" id="branch"/>
            </FormGroup>
            <FormGroup>
              <Label for="assigned">Assigned ? </Label>
              <Input type="textarea" name="select" id="assigned"/>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {console.log('yay')}}>Do Something</Button>{' '}
          <Button color="secondary" onClick={() => {console.log('yay')}}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
