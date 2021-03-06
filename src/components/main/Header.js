import React, { useState }  from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  import {Link} from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/home">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">Contact</Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/state">State</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/funwithstate">Function With State</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/form-input">Form Input</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/register">Register</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/hooks">Hooks</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/register-hooks">Register Hooks</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/counter-comp1">Counter Comp1</Link>
            </NavItem>
            <NavItem>
            <Link className="nav-link" to="/counter-comp2">Counter Comp2</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
        </div>
    )
}
