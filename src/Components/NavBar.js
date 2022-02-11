import React, { useState } from 'react';
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
	NavbarText,
} from 'reactstrap';
import styled from 'styled-components';

const NavDivStyle = styled.div`
	nav {
		padding: 1rem 3rem;
	}
`;

const NavBar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavDivStyle>
			<Navbar color='danger' dark expand='md'>
				<NavbarBrand href='/'>FoodPedia</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ms-auto' navbar>
						<NavItem>
							<NavLink href='./pages/Home'>Home</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</NavDivStyle>
	);
};

export default NavBar;
