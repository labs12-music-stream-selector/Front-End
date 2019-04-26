import styled, {css} from 'styled-components';

export const AuthForm = styled.form`
	height: fit-content;
	width: fit-content;
	
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Input = styled.input`
	height: 30px;
	min-width: 215px;
	padding: 5px;
	border: none;
	border-radius: 5px;
	margin: 5px 0;

	${props => props.bgColor && css`
		background-color: ${props.bgColor};
		:hover {
			cursor: pointer;
		}
	`}
`