import React from 'react';
import styled from 'styled-components';

const Yes = styled.button`
	background: #79d70f;
	text-decoration: none;
	font-size: 30px;
	margin: 5px;
	border-style: none;
	border-radius: 5px;
`;

const No = styled(Yes)`
	background: red;
`;

function CustomerChoice() {
	return <div></div>;
}

export default CustomerChoice;
