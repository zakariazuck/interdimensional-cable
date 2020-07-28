import React from 'react';
import logo from "../../assets/img/logo.svg"
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';
import Search from '../../components/Search/Search';
import './MyNavbar.css';


const MyNavbar = (props) => {
  
    return (
      <div className= "myNav">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <div href="/" className="logo">
              <img src={logo} alt="logo" height="70"></img>
            </div>
          </NavbarBrand>
          <div className="ml-auto">
            <Search {...props}/>
          </div>
        </Navbar>
      </div>
    );
  }
  
  export default MyNavbar;