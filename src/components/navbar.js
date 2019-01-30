import React from 'react'
import { Navbar, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export class NavBar extends React.Component {

  /**
   * This component is just a place holder for anything to be added to it in the future.
   * Having a Navbar is never a bad idea!
   */


  state = { /* ... */ }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Plexxis</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Settings
              </DropdownToggle>
              <DropdownMenu right>
                
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Navbar>
      </div>
    )
  }
}

