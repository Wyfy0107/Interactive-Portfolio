import React, { Component } from 'react';
import styled from 'styled-components';
import AdminText from './AdminText';
import CustomerText from './CustomerText';

const ChatSectionWrapper = styled.div`
	background: black;
	width: 60vw;
	font-size: 30px;
	margin: 100px auto;
`;

export default class ChatSection extends Component {
	state = {
		firstText: false,
		secondText: false,
		thirdText: false,
		adminText: ['Hello', 'My name is Duy', 'What is your name?'],
		customerText: [],
		customerName: null,
	};

	firstTextHandler = () => this.setState({ firstText: true });
	secondTextHandler = () => this.setState({ secondText: true });
	thirdTextHandler = () => this.setState({ thirdText: true });
	customerNameHandler = (event) =>
		this.setState({ customerName: event.target.value });
	render() {
		return (
			<div>
				<ChatSectionWrapper>
					<AdminText
						adminText={this.state.adminText}
						firstTextStatus={this.state.firstText}
						secondTextStatus={this.state.secondText}
						thirdTextStatus={this.state.thirdText}
						firstTextHandler={this.firstTextHandler}
						secondTextHandler={this.secondTextHandler}
						thirdTextHandler={this.thirdTextHandler}
					/>
					<CustomerText
						thirdTextStatus={this.state.thirdText}
						nameHandler={this.customerNameHandler}
					/>
					<p>{this.state.customerName ? this.state.customerName : null}</p>
				</ChatSectionWrapper>
			</div>
		);
	}
}
