import ChatBot from 'react-simple-chatbot';
import React from 'react';
import Info from './Info';

function CustomChatbot(props) {
	const config = {
		hideBotAvatar: true,
		hideHeader: true,
		bubbleStyle: {
			background: '#ff1e56',
		},
	};

	const style = {
		background: 'black',
		margin: '70px auto',
		width: props.infoDisplay ? '50vw' : '70vw',
		transition: '1s',
	};
	const steps = [
		{
			id: 'Greet',
			message: 'Hello, My name is Duy',
			trigger: 'Done',
		},
		{
			id: 'Done',
			message: 'What is your name ?',
			trigger: 'userName',
		},
		{
			id: 'userName',
			user: true,
			trigger: 'ask user',
		},
		{
			id: 'ask user',
			message: 'Hi, {previousValue}',
			trigger: 'ask user purpose',
		},
		{
			id: 'ask user purpose',
			message: 'You must be here to look at my portfolio, is that correct ? 😀',
			trigger: 'user answer',
		},
		{
			id: 'user answer',
			options: [
				{ value: 'yes', label: 'Yes', trigger: 'my answer' },
				{ value: 'no', label: 'No', trigger: 'my sub answer' },
			],
		},
		{
			id: 'my answer',
			message: 'Welcome then, I will show you what I can do',
			trigger: 'portfolio',
		},
		{
			id: 'my sub answer',
			message:
				'Sorry to hear that, however while you are here, please take a look at my portfolio',
			trigger: 'portfolio',
		},
		{
			id: 'portfolio',
			message: props.infoDisplayHandler,
		},
	];
	return (
		<div
			style={{
				display: props.infoDisplay ? 'flex' : null,
				flexFlow: props.infoDisplay ? 'row' : null,
				marginTop: '100px',
				transform: props.transition ? 'translateX(10000px)' : null,
				transition: '1s',
			}}>
			<ChatBot steps={steps} {...config} style={style} />
			{props.infoDisplay ? (
				<Info
					infoStatus={props.infoDisplay}
					transition={props.transitionHandler}
				/>
			) : null}
		</div>
	);
}
export default CustomChatbot;
