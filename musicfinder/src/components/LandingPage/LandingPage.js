import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Cell } from "styled-css-grid";

import Login from "../LoginForm/OAuthGoogle.js";
import PatreonButton from "../Patreon/PatreonButton.js";

import records from "../../imgs/recordCollection.jpg";
import painting from "../../imgs/painting.jpg";
import playlist from "../../imgs/playlist.jpg";
import moodi from "../../imgs/logoWord.svg";

const LandingPage = props => {
  return (
    <LandingPageContainer>
      <Header>
        <div id="text-container">
          <img src={moodi} alt="logo" />
          <h1>MoodiBeats</h1>
          <h2>Find copyright free music by mood.</h2>
        </div>
        <Login
          style={{
            position: "absolute",
            top: "5px",
            right: "5px"
          }}
        />
      </Header>

      <Grid
        areas={["feature-1 img-1", "img-2 feature-2", "feature-3 img-3"]}
        columns={"1fr 1fr"}
        rows={"minmax(45px,auto) minmax(45px,auto) minmax(45px,auto)"}
        gap="0"
        id="grid"
      >
        <Cell
          height={1}
          center
          middle
          area="feature-1"
          className="feature-details"
        >
          <h2>Browse Free Curated Songs</h2>
          <p>
            over 60 curated songs guaranteed free to use on your stream or
            videos.
          </p>
        </Cell>
        <Cell height={1} center middle area="img-1" className="feature-img">
          <img src={records} alt="records" />
        </Cell>
        <Cell height={1} center middle area="img-2" className="feature-img">
          <img src={painting} alt="Painting" />
        </Cell>
        <Cell
          height={1}
          center
          middle
          area="feature-2"
          className="feature-details"
        >
          <h2>Search songs by mood</h2>
          <p>Choose just the right music for the theme of your content.</p>
        </Cell>
        <Cell
          height={1}
          center
          middle
          area="feature-3"
          className="feature-details"
        >
          <h2>Create Playlists</h2>
          <p>Group your favorite songs together.</p>
        </Cell>
        <Cell height={1} center middle area="img-3" className="feature-img">
          <img src={playlist} alt="playlist" />
        </Cell>
      </Grid>

      <Team>
        <div>
          <h2>Team</h2>
          <ul>
            <li>
              <img
                src="https://avatars2.githubusercontent.com/u/46465575?s=400&v=4"
                alt="Logan Hufstetler"
              />
              <a href="github.com/BlissCatalyst">Logan Hufstetler</a>
            </li>
            <li>
              <img
                src="https://avatars0.githubusercontent.com/u/10713358?s=400&u=f3dd10a2ecfa7efa5b993fc63fd905cf14311fd3&v=4"
                alt="Davina Taylor"
              />
              <a href="github.com/lilvina">Davina Taylor</a>
            </li>
            <li>
              <img
                src="https://avatars0.githubusercontent.com/u/6886907?s=400&v=4"
                alt="John Humphreys"
              />
              <a href="github.com/johnpharmd">John Humphreys</a>
            </li>
            <li>
              <img
                src="https://avatars0.githubusercontent.com/u/46500263?s=400&v=4"
                alt="Md Kawsar Hussen"
              />
              <a href="github.com/kkingbd">Md Kawsar Hussen</a>
            </li>
            <li>
              <img
                src="https://avatars3.githubusercontent.com/u/42630698?s=400&v=4"
                alt="Jonathan Bernal"
              />
              <a href="github.com/BlueSandWeb">Jonathan Bernal</a>
            </li>
            <li>
              <img
                src="https://avatars1.githubusercontent.com/u/17155841?s=400&v=4"
                alt="Sammy Lee"
              />
              <a href="github.com/Captmoonshot">Sammy Lee</a>
            </li>
            <li>
              <img
                src="https://avatars2.githubusercontent.com/u/13279523?s=460&v=4"
                alt="Xander Jake de los Santos"
              />
              <a href="github.com/xanderjakeq">Xander Jake de los Santos</a>
            </li>
          </ul>
        </div>
      </Team>
      <Footer>
        <Link to="/termsofservice">Terms of Service</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
        <PatreonButton />
      </Footer>
    </LandingPageContainer>
  );
};
export default LandingPage;

const LandingPageContainer = styled.div`
  color: ivory;
  margin-top: -40px;
  * {
    margin: 0;
  }
  #grid {
    margin: 20px 0 0px;
    .feature-details,
    feature-img {
      overflow: hidden;
    }
  }

  .feature-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    overflow: hidden;
    position: relative;
  }
  .feature-img img {
    width: 100%;
  }
  .feature-details {
    font-size: 1.5em;
    padding: 0 50px;
    text-align: left;
    h2 {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 750px) {
    #grid {
      margin: 0;
      grid-template-areas:
        "feature-1"
        "img-1"
        "feature-2"
        "img-2"
        "feature-3"
        "img-3";
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      .feature-details {
        height: 500px;
        max-height: 500px;
        img {
        }
      }
    }
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80");
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: 10px 10px 0;
  margin-bottom: -20px;
  #text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.71);
    margin: 10px 0;
    h1 {
      text-align: center;
    }
    img {
      width: 40%;
      max-width: 200px;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0px;
  padding-top: 60px;
  padding-bottom: 60px;
  min-height: 300px;
  background-color: ivory;
  color: #232323;
  font-size: 1.5em;
  h2 {
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    list-style: none;
    margin: 5px auto;
    padding: 0;
    width: fit-content;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
    width: 33.333%;
    text-align: left;
    align-self: flex-start;
  }
  img {
    width: 100px;
    height: auto;
    // border-radius: 100%;
  }
  a {
    text-decoration: none;
    text-align: center;
    color: inherit;
    text-decoration: none;
    :hover {
      color: #007da6;
      cursor: pointer;
    }
  }
  @media (max-width: 830px) {
    ul {
      align-items: center;
      justify-content: space-evenly;
      width: 450px;
    }
    li {
      align-self: unset;
      width: 190px;
    }
  }
  @media (max-width: 500px) {
    font-size: 1.2em;
    ul {
      width: 300px;
    }
    li {
      width: 126px;
      img {
        margin-bottom: 10px;
      }
    }
  }
`;
const Footer = styled.footer`
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 600px) {
      flex-direction: column;
      padding-top: 20px;
      padding-bottom: 20px;
    }
		a{
			text-align: center;
			color: inherit;
      text-decoration: none;
      color: ivory;
			margin: 5px 0;
			:hover{
				cursor: pointer;
			}
		}
    }
    `;
