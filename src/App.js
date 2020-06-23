import React, { createContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CustomChatbot from './react-simple-chatbot/Chatbot';
import About from './react-simple-chatbot/About';
import styled from 'styled-components';

const AboutWrapper = styled.div`
	margin: auto;
	text-align: center;
	transform: ${(props) =>
		props.transition ? 'translateY(-500px)' : 'translateY(100px)'};
	visibility: ${(props) => (props.transition ? 'visible' : 'hidden')};
	transition: 1s;
`;

class App extends React.Component {
	state = {
		infoDisplay: false,
		aboutPageTransition: false,
	};

	infoDisplayHandler = () => this.setState({ infoDisplay: true });

	aboutPageTransitionHandler = () =>
		this.setState({ aboutPageTransition: true });

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
					<About />
				</AboutWrapper>
			</div>
		);
	}
}

export default App;
