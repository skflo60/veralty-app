import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./Menu.css"; 
 
class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<Navbar color="faded" light>
		          <Nav className="float-xs-center" navbar>
		            <NavItem>
		              <NavLink href="#Temperature">Température</NavLink>
		            </NavItem>
		            <NavItem>
		              <NavLink href="#Message">Message</NavLink>
		            </NavItem>
		          </Nav>
		        </Navbar>
	        </div>
		);
	}
}

export default Menu;