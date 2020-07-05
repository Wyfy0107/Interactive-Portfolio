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
		width: props.infoDisplay ? '0' : '70vw',
		transition: '1s',
	};
	const steps = [
		{
			id: 'greet',
			message: 'Hello, My name is Duy',
			trigger: 'portfolio',
		},
		{
			id: 'ask username',
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
			message:
				'You must be here to check out my portfolio, is that correct ? 😀',
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
			message:
				'Well, I am a student who is studying Environmental Engineering degree at Xamk University of Applied Sciences and I will be graduating soon',
			trigger: 'introduction',
		},
		{
			id: 'my sub answer',
			message:
				'Sorry to hear that, however while you are here, please let me introduce myself',
			trigger: 'my answer',
		},
		{
			id: 'introduction',
			message:
				'In the past few months, I wanted to learn something new and started with web development, and now, I fell in love with it.',
			trigger: 'intro',
		},
		{
			id: 'intro',
			message: 'Let me show you more about what I have learned',
			trigger: 'ok',
		},
		{
			id: 'ok',
			options: [{ value: 'ok', label: 'Ok', trigger: 'transition' }],
		},
		{
			id: 'transition',
			message: 'take a look on the right side',

			trigger: 'portfolio',
		},
		{
			id: 'portfolio',
			message: props.infoDisplayHandler,
			end: true,
		},
	];
	return (
		<div
			style={{
				display: props.infoDisplay ? 'flex' : null,
				flexFlow: props.infoDisplay ? 'row' : null,
				marginTop: '100px',
				transition: '1s',
			}}>
			<ChatBot steps={steps} {...config} style={style} />
			{props.infoDisplay ? (
				<Info
					infoStatus={props.infoDisplay}
					transition={props.transitionHandler}
					transitionState={props.transition}
				/>
			) : null}
		</div>
	);
}
export default CustomChatbot;
