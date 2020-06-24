import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CustomChatbot from './react-simple-chatbot/Chatbot';
import About from './react-simple-chatbot/About';
import styled from 'styled-components';

const AboutWrapper = styled.div`
	margin: auto;
	text-align: center;
	transform: ${(props) =>
		props.transition ? 'translateY(-600px)' : 'translateY(100px)'};
	visibility: ${(props) => (props.transition ? 'visible' : 'hidden')};
	transition: 1s;
`;

class App extends React.Component {
	state = {
		infoDisplay: false,
		aboutPageTransition: false,
		hoveringIcon: '',
	};

	infoDisplayHandler = () => this.setState({ infoDisplay: true });

	aboutPageTransitionHandler = () =>
		this.setState({ aboutPageTransition: true });

	descriptionHandler = (string) => {
		this.setState({ description: true, hoveringIcon: string });
		console.log(this.state.hoveringIcon);
	};

	descriptionToggler = () => this.setState({ hoveringIcon: '' });

	render() {
		return (
			<div>
				<Navbar />
				<CustomChatbot
					infoDisplay={this.state.infoDisplay}
					infoDisplayHandler={this.infoDisplayHandler}
					transitionHandler={this.aboutPageTransitionHandler}
					transition={this.state.aboutPageTransition}
				/>
				<AboutWrapper transition={this.state.aboutPageTransition}>
					<About
						descriptionHandler={this.descriptionHandler}
						hoverIcon={this.state.hoveringIcon}
						mouseLeave={this.descriptionToggler}
					/>
				</AboutWrapper>
			</div>
		);
	}
}

export default App;
