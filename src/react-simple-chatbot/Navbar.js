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
	width: 50px;
`;

const Title = styled.h2`
	transition: 0.5s;
	&:hover {
		color: #ff1e56;
	}
`;

const LogoWrapper = styled.div`
	flex: 5 1;
	margin: 1.2rem 10%;
	@media (max-width: 800px) {
		flex: 1.5 1;
	}
`;

function Navbar() {
	return (
		<div>
			<NavbarWrapper>
				<LogoWrapper>
					<Image src={rocket} alt='rocket icon' />
				</LogoWrapper>
				<Link
					to='/Interactive-Portfolio'
					style={{ flex: '1 2', textDecoration: 'none', color: '#ffac41' }}>
					<Title>Home</Title>
				</Link>
				<Link
					to='/About'
					style={{ flex: '1 2', textDecoration: 'none', color: '#ffac41' }}>
					<Title>About</Title>
				</Link>
				<Link
					to='/Contact'
					style={{ flex: '1 2', textDecoration: 'none', color: '#ffac41' }}>
					<Title>Contact</Title>
				</Link>
			</NavbarWrapper>
		</div>
	);
}

export default Navbar;
