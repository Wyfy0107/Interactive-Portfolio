import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
	background: black;
	display: flex;
	flex-flow: row;
	justify-content: space-around;
	position: sticky;
	top: 0;
`;

function Navbar() {
	return (
		<div>
			<NavbarWrapper>
				<h1 style={{ flex: '5 1', marginLeft: '10%' }}>Icon</h1>
				<h2 style={{ flex: '1 2' }}>Home</h2>
				<h2 style={{ flex: '1 2' }}>About</h2>
				<h2 style={{ flex: '1 2' }}>Contact</h2>
			</NavbarWrapper>
		</div>
	);
}

export default Navbar;
