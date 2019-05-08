import React from 'react';
import styled, {css} from 'styled-components';

import Login from '../LoginForm/OAuthGoogle.js'

const LandingPage = (props) => {
	return (
		<LandingPageContainer>
			<Header>
			<div>
				<h1>MoodiBeats</h1>
				<h2>Find copyright free music by mood.</h2>
			</div>
			<Login style = {{
				position: 'absolute',
				top: '5px', 
				right: '5px'
			}}/>
			</Header>
			<FeaturesContainer>
				<Feature left>
					<div className = 'feature-details'>
						<h2>Browse Free Curated Songs</h2>
						<p>
							over 60 curated songs guaranteed free to use on your stream or videos.
						</p>
					</div>
					<div className = 'feature-img'>
						<img src = 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80' alt = 'video creator'/>
					</div>
				</Feature>
				<Feature right>
					<div className = 'feature-img'>
						<img src = 'https://images.unsplash.com/photo-1537884444401-d79ef2b2990d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' alt = 'Painting'/>
					</div>
					<div className = 'feature-details'>
						<h2>Search songs by mood</h2>
						<p>
							Choose just the right music for the theme of your content.
						</p>
					</div>
				</Feature>
			</FeaturesContainer>
		</LandingPageContainer>
	)
}

export default LandingPage;

const LandingPageContainer = styled.div`
	color: ivory;
	*{
		margin: 0;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 10px;
`;

const FeaturesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Feature = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0 10px;

	font-size: 1.5em;

	div{
		width: 50vw;
	}

	.feature-details{
		position: relative;
		z-index: 5;

		${props => props.left && css`
			left: 20%;
		`}
		${props => props.right && css`
			right: 20%;
		`}

		h1, p{
			text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.76)
		}
	}
	
	.feature-img{
		height: auto;
		max-height: 50vw;
		overflow: hidden;
		position: relative;
		
	}
	.feature-img img{
		height: 100%;
	}
`;