import styled, {css} from 'styled-components';

export const AuthForm = styled.form`
	height: fit-content;
	width: 300px;
	
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Input = styled.input`
	height: 30px;
	max-width: 100%;
	padding: 5px;
	border: none;
	border-radius: 5px;
	margin: 5px 0;

	:hover {
		cursor: pointer;
	}

	${props => props.bgColor && css`
		background-color: ${props.bgColor};
	`}
`