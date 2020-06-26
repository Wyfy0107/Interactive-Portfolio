import React from 'react';
import styled from 'styled-components';
import typing from '../images/typing.png';
import pic2 from '../images/pic2.png';

const OpinionWrapper = styled.div`
	display: flex;
	flex-flow: column;
	margin-top: 5rem;
	align-items: center;
`;

const Image = styled.img`
	width: 10vw;
	height: 10vw;
	margin: 1rem;
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
					<Image src={pic2} alt='web browser' />
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
					<Image src={typing} alt='typing' />
				</Content>
			</OpinionWrapper>
		</div>
	);
}

export default AboutOpinion;
