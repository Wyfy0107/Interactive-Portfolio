import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const InfoWrapper = styled.div`
	background: black;
	color: white;
	text-align: center;
	width: 70vw;
	font-size: 2rem;
`;

const IconWrapper = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-around;
	margin-top: 60px;
	font-size: 5rem;
`;

const ContinueButton = styled.div`
	border-style: none;
	background: black;
	color: #ff1e56;
	border: 1px solid white;
	display: inline-block;
	padding: 8px;
	border-radius: 8px;
	transition: 0.5s;
	&:hover {
		background: #900c3f;
		transform: scale(1.2);
		cursor: pointer;
	}
`;

function Info(props) {
	return (
		<div
			style={{
				margin: 'auto',
			}}>
			{props.transitionState || (
				<InfoWrapper>
					I am familiar with
					<IconWrapper>
						<FontAwesomeIcon style={{ color: '#DE4B25' }} icon={faHtml5} />
						<FontAwesomeIcon style={{ color: '#146FB1' }} icon={faCss3Alt} />
						<FontAwesomeIcon style={{ color: '#E9D54D' }} icon={faJs} />
						<FontAwesomeIcon style={{ color: '#5ED4F4' }} icon={faReact} />
					</IconWrapper>
					<p
						style={{
							marginTop: '50px',
							padding: '15px',
						}}>
						As you can see, React is the first framework that I started with and
						I fell in love with it ever since. To me, react is cohesive and it
						offers interactivity with ease. I am also able to use some packages
						within the React ecosystem such as{' '}
						<span style={{ color: '#ff1e56' }}>React-Router</span>,{' '}
						<span style={{ color: '#ff1e56' }}>Redux</span> and{' '}
						<span style={{ color: '#ff1e56' }}> Styled-Component</span>
					</p>
					<ContinueButton onClick={props.transition}>
						What's more
					</ContinueButton>
				</InfoWrapper>
			)}
		</div>
	);
}

export default Info;
