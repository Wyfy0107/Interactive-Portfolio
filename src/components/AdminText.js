import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const AdminTextWrapper = styled.div`
	background: #ff1e56;
	display: inline-block;
	border-radius: 5px;
	margin-top: 5px;
`;

class AdminText extends Component {
	componentDidMount() {
		setTimeout(() => this.props.firstTextHandler(), 2000);
		setTimeout(() => this.props.secondTextHandler(), 3000);
		setTimeout(() => this.props.thirdTextHandler(), 4000);
	}
	render() {
		return (
			<div>
				<AdminTextWrapper>
					{this.props.firstTextStatus ? this.props.adminText[0] : null}
				</AdminTextWrapper>
				<br />
				<AdminTextWrapper>
					{this.props.secondTextStatus ? this.props.adminText[1] : null}
				</AdminTextWrapper>
				<br />
				<AdminTextWrapper>
					{this.props.thirdTextStatus ? this.props.adminText[2] : null}
				</AdminTextWrapper>
			</div>
		);
	}
}

export default AdminText;
