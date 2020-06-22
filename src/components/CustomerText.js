import React, { Component } from 'react';
import CustomerChoice from './CustomerChoice';
import styled from 'styled-components';

const CustomerTextWrapper = styled.div`
	text-align: right;
	display: inline-block;
	margin: 5px;
`;

const SubmitButton = styled.button`
	background: #79d70f;
	text-decoration: none;
	font-size: 20px;
	margin: 5px;
	border-style: none;
	border-radius: 5px;
`;

class CustomerText extends Component {
	render() {
		return (
			<div>
				<CustomerTextWrapper>
					<CustomerChoice />
					{this.props.thirdTextStatus ? (
						<div>
							<input onChange={this.props.nameHandler} type='text' />
							<SubmitButton>Submit</SubmitButton>
						</div>
					) : null}
				</CustomerTextWrapper>
			</div>
		);
	}
}

export default CustomerText;
