import React, { useState } from 'react';
import logo from "../../assets/img/logo.svg"
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
} from 'reactstrap';
import Search from '../../components/Search/Search';
import './MyNavbar.css';


const MyNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className= "myNav">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <a href="" className="logo">
              <img src={logo} alt="logo" height="70"></img>
            </a>
          </NavbarBrand>
          <div className="ml-auto">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem >
                  <Search {...props}/>
                </NavItem>
                <NavbarToggler onClick={toggle} />
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
  
  export default MyNavbar;