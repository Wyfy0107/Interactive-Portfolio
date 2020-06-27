import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ContactWrapper = styled.div`
	display: flex;
	flex-flow: row;
	font-size: 5rem;
	color: #ffac41;
	justify-content: space-around;
	margin-top: 12rem;
	text-align: center;
`;

const ContactDescription = styled.p`
	font-size: 1.2rem;
`;

const EmailLink = styled.a`
	text-decoration: none;
	color: #ff1e56;
	font-size: 1.5rem;
`;

const EmailButton = styled.button`
	border-style: none;
	margin: 5rem;
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

function Contact() {
	return (
		<div className='page' style={{ margin: 'auto', textAlign: 'center' }}>
			<ContactWrapper>
				<div>
					<FontAwesomeIcon icon={faMobileAlt} />
					<ContactDescription>Phone: +358 44 231 6575</ContactDescription>
				</div>
				<div>
					<FontAwesomeIcon icon={faEnvelope} />
					<ContactDescription>
						Email: nguyenduy010798@gmail.com
					</ContactDescription>
				</div>
			</ContactWrapper>
			<EmailButton>
				<EmailLink href='mailto:nguyenduy010798@gmail.com'>
					Send me an email
				</EmailLink>
			</EmailButton>
		</div>
	);
}

export default Contact;
