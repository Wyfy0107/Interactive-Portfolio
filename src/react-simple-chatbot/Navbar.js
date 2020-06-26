import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import rocket from '../images/rocket.png';

const NavbarWrapper = styled.nav`
	background: black;
	display: flex;
	flex-flow: row;
	justify-content: space-around;
	position: sticky;
	top: 0;
	color: #ffac41;
`;

const Image = styled.img`
	width: 7%;
`;

function Navbar() {
	return (
		<div>
			<NavbarWrapper>
				<div style={{ flex: '5 1', margin: '1.2rem 10% ' }}>
					<Image src={rocket} alt='rocket icon' />
				</div>
				<Link
					to='/'
					style={{ flex: '1 2', textDecoration: 'none', color: '#ffac41' }}>
					<h2>Home</h2>
				</Link>
				<Link
					to='/About'
					style={{ flex: '1 2', textDecoration: 'none', color: '#ffac41' }}>
					<h2>About</h2>
				</Link>
				<Link
					to='/Contact'
					style={{ flex: '1 2', textDecoration: 'none', color: '#ffac41' }}>
					<h2>Contact</h2>
				</Link>
			</NavbarWrapper>
		</div>
	);
}

export default Navbar;
