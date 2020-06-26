import React from 'react';
import styled from 'styled-components';
import typing from '../images/typing.png';
import pic2 from '../images/pic2.png';
import { Link } from 'react-router-dom';

const OpinionWrapper = styled.div`
	display: flex;
	flex-flow: column;
	margin-top: 5rem;
	align-items: center;
`;

const ContactButton = styled.div`
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

const Image = styled.img`
	width: 10vw;
	height: 10vw;
	margin: 1rem 1rem 5px 1rem;
`;

const Content = styled.div`
	margin: 2rem;
	display: flex;
	flex-flow: row;
`;

const Text = styled.p`
	font-size: 1.3rem;
`;

function AboutOpinion() {
	return (
		<div>
			<OpinionWrapper>
				<Content>
					<div>
						<Image src={pic2} alt='web browser' />
						<p
							style={{
								fontSize: '0.7rem',
								textAlign: 'center',
							}}>
							Icon made by Nhor Phai from www.flaticon.com
						</p>
					</div>
					<Text>
						I love programming interactive web apps with React.
						<br /> In my opinion, SPAs offer a more friendly and fun interaction
						to customers.
						<br /> Apart from that, I also enjoy experimenting with different
						looks and design with HTML and CSS, <br />
						combined with CSS animation to give the best looks and feels to my
						customers.
					</Text>
				</Content>

				<Content />
				<Content>
					<Text>
						My programming orientation is simple code, readable and
						maintainable. <br /> I am also a very competitive person, if I come
						across a problem, <br />
						it would make me uncomfortable until it is resolved. <br /> After
						all, it simply is because programming to me is stimulative, <br />
						fun and never cease to amaze me.
					</Text>
					<div>
						<Image src={typing} alt='typing' />
						<p
							style={{
								fontSize: '0.7rem',
								textAlign: 'center',
							}}>
							Icon made by Monkik from www.flaticon.com
						</p>
					</div>
				</Content>
				<Link to='/Contact'>
					<ContactButton>Contact me</ContactButton>
				</Link>
			</OpinionWrapper>
		</div>
	);
}

export default AboutOpinion;
