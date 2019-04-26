import styled, {css} from 'styled-components';

export const AuthForm = styled.form`
	height: 150px;
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

	:hover {
		cursor: pointer;
	}

	${props => props.bgColor && css`
		background-color: ${props.bgColor};
	`}
`