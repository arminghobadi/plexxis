import React from 'react'
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

export class NavBar extends React.Component {

  /**
   * This component is just a place holder for anything to be added to it in the future.
   * Having a Navbar is (almost) never a bad idea!
   */


  state = { /* ... */ }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Plexxis</NavbarBrand>
          <Nav className="ml-auto" navbar />
        </Navbar>
      </div>
    )
  }
}

