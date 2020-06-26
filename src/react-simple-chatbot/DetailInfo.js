import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
	font-size: 1.2rem;
	width: 30vw;
	margin: 2rem auto;
`;

function DetailInfo({ type }) {
	let descriptionContent = null;
	switch (type) {
		case 'faUserCircle':
			descriptionContent = (
				<Description>
					I made this CV after I learned the basics of HTML. Although it does
					not look like much, it did sparked the curiosity and passion in coding
					in me, which has led to what I am today.
				</Description>
			);
			break;
		case 'faCalculator':
			descriptionContent = (
				<Description>
					This is the first independent project that I made after learning the
					basics of React. It also caused me a lot of troubles since it was my
					first time coding something so strange. Nevertheless, this project
					taught me so much about states vs props in React and how to manage
					them.
				</Description>
			);
			break;
		case 'faCloudSunRain':
			descriptionContent = (
				<Description>
					This time I tried to make an App that display the Air Quality in
					Helsinki, the city I am living in. After this project, I learned how
					to make API calls using Axios package to GET the data I want,
					manipulate them and render them to the screen.
				</Description>
			);
			break;
		case 'faPuzzlePiece':
			descriptionContent = (
				<Description>
					Then I challenged myself with a web game. This one was tough as I had
					to combine detailed CSS to animate the movement of the cards and keep
					them in sync with the logic.
				</Description>
			);
			break;
		default:
			descriptionContent = null;
	}
	return <div>{descriptionContent}</div>;
}

export default DetailInfo;
