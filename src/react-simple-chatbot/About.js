import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserCircle,
	faCalculator,
	faCloudSunRain,
	faPuzzlePiece,
	faInfo,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import DetailInfo from './DetailInfo';
import { Link } from 'react-router-dom';

const gridStyle = {
	fontSize: '5rem',
	display: 'grid',
	gap: '1rem',
	gridTemplateColumns: 'repeat(auto-fit, minmax(100px,1fr)',
};

const Header = styled.h1`
	color: #c70039;
	margin-bottom: 10rem;
	font-size: 3rem;
`;

const Caption = styled.h3`
	font-size: 1.5rem;
`;

const IconWrapper = styled.div`
	&:hover {
		color: #ffac41;
		transition: 0.5s;
	}
`;

const ExternalLink = styled.a`
	text-decoration: none;
	color: white;
`;

function About({ descriptionHandler, mouseLeave, hoverIcon }) {
	return (
		<div>
			<Header>Here are some of the projects I have done</Header>
			<div style={gridStyle}>
				<ExternalLink href='https://wyfy0107.github.io/CV/' target='_blank'>
					<IconWrapper
						onMouseEnter={() => descriptionHandler('faUserCircle')}
						onMouseLeave={mouseLeave}>
						<FontAwesomeIcon
							style={{ margin: 'auto', color: '#1f4068' }}
							icon={faUserCircle}
						/>
						<Caption>My first CV website</Caption>
					</IconWrapper>
				</ExternalLink>

				<ExternalLink
					href='https://wyfy0107.github.io/Calculator/'
					target='_blank'>
					<IconWrapper
						onMouseEnter={() => descriptionHandler('faCalculator')}
						onMouseLeave={mouseLeave}>
						<FontAwesomeIcon
							style={{ margin: 'auto', color: '#222831' }}
							icon={faCalculator}
						/>
						<Caption>Simple Calculator</Caption>
					</IconWrapper>
				</ExternalLink>

				<ExternalLink
					href='https://wyfy0107.github.io/weather-app/'
					target='_blank'>
					<IconWrapper
						onMouseEnter={() => descriptionHandler('faCloudSunRain')}
						onMouseLeave={mouseLeave}>
						<FontAwesomeIcon
							style={{ margin: 'auto', color: '#ff5722' }}
							icon={faCloudSunRain}
						/>
						<Caption>Air Quality App</Caption>
					</IconWrapper>
				</ExternalLink>

				<ExternalLink
					href='https://wyfy0107.github.io/memory-card-game/'
					target='_blank'>
					<IconWrapper
						onMouseEnter={() => descriptionHandler('faPuzzlePiece')}
						onMouseLeave={mouseLeave}>
						<FontAwesomeIcon
							style={{ margin: 'auto', color: '#f38181' }}
							icon={faPuzzlePiece}
						/>
						<Caption>Memory Card game</Caption>
					</IconWrapper>
				</ExternalLink>

				<Link to='/About' style={{ textDecoration: 'none', color: '#ffac41' }}>
					<IconWrapper
						onMouseEnter={() => descriptionHandler('faInfo')}
						onMouseLeave={mouseLeave}>
						<FontAwesomeIcon
							style={{ margin: 'auto', color: 'red' }}
							icon={faInfo}
						/>
						<Caption>About my practice</Caption>
					</IconWrapper>
				</Link>
			</div>
			<DetailInfo type={hoverIcon} />
		</div>
	);
}

export default About;
