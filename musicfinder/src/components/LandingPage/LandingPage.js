import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Cell } from "styled-css-grid";

import Login from "../LoginForm/OAuthGoogle.js";
import PatreonButton from "../Patreon/PatreonButton.js";

import records from "../../imgs/recordCollection.jpg";
import painting from "../../imgs/painting.jpg";
import recordPlayer from "../../imgs/recordPlayer.jpg";
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
          <h2>Creator Friendly</h2>
          <p>
            MoodiBeats the app designed for content creators who want royalty
            free music that doesn't cost an arm and a leg. Make playlists based
            on the mood you are looking for where the music is always fresh.
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
          <h2>Data Driven</h2>
          <p>
            MoodiBeats cares about how you feel. That's why we engineered
            content-based filtering on text meta-data of over 1000 copyright
            free YouTube music videos. We then trained a classification machine
            learning algorithm to generate predictions of moods from that
            meta-data.
          </p>
        </Cell>
        <Cell
          height={1}
          center
          middle
          area="feature-3"
          className="feature-details"
        >
          <h2>Have Fun!</h2>
          <p>
            We know how hard it is to find the right music. We also know that if
            you want to have a harmless stream to play games and interact with
            your fans, finding music can hold you back. Browse a little! We add
            music to keep up with uploads on Youtube. That way, you have one,
            convenient place to search for music!
          </p>
        </Cell>
        <Cell height={1} center middle area="img-3" className="feature-img">
          <img src={recordPlayer} alt="playlist" />
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
              <h4>Logan Hufstetler</h4>
              <p>Software Engineer</p>
              <div>
                <a href="https://github.com/BlissCatalyst">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://github.com/favicon.ico"
                    alt="github logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/logan-hufstetler-145611a2/">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="linkedin logo"
                  />
                </a>
              </div>
            </li>
            <li>
              <img
                src="https://avatars0.githubusercontent.com/u/10713358?s=400&u=f3dd10a2ecfa7efa5b993fc63fd905cf14311fd3&v=4"
                alt="Davina Taylor"
              />
              <h4>Davina Taylor</h4>
              <p>Software Engineer</p>
              <div>
                <a href="https://github.com/lilvina">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://github.com/favicon.ico"
                    alt="github logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/davinataylor123/">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="linkedin logo"
                  />
                </a>
              </div>
            </li>
            <li>
              <img
                src="https://avatars0.githubusercontent.com/u/6886907?s=400&v=4"
                alt="John Humphreys"
              />
              <h4>John Humphreys</h4>
              <p>Data Scientist</p>
              <div>
                <a href="https://github.com/johnpharmd">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://github.com/favicon.ico"
                    alt="github logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/johnhumphreys/">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="linkedin logo"
                  />
                </a>
              </div>
            </li>
            <li>
              <img
                src="https://avatars0.githubusercontent.com/u/46500263?s=400&v=4"
                alt="Md Kawsar Hussen"
              />
              <h4>Md Kawsar Hussen</h4>
              <p>Software Engineer</p>
              <div>
                <a href="https://github.com/kkingbd ">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://github.com/favicon.ico"
                    alt="github logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/kkingbd/">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="linkedin logo"
                  />
                </a>
              </div>
            </li>
            <li>
              <img
                src="https://avatars3.githubusercontent.com/u/42630698?s=400&v=4"
                alt="Jonathan Bernal"
              />
              <h4>Jonathan Bernal</h4>
              <p>Software Engineer</p>
              <div>
                <a href="https://github.com/BlueSandsWeb ">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://github.com/favicon.ico"
                    alt="github logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/jon-bernal/">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="linkedin logo"
                  />
                </a>
              </div>
            </li>
            <li>
              <img
                src="https://avatars1.githubusercontent.com/u/17155841?s=400&v=4"
                alt="Sammy Lee"
              />
              <h4>Sammy Lee</h4>
              <p>Data Scientist</p>
              <div>
                <a href="github.com/Captmoonshot">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://github.com/favicon.ico"
                    alt="github logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/sammy-lee-89944282/">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="linkedin logo"
                  />
                </a>
              </div>
            </li>
            <li>
              <img
                src="https://avatars2.githubusercontent.com/u/13279523?s=460&v=4"
                alt="Xander Jake de los Santos"
              />
              <h4>Xander Jake de los Santos</h4>
              <p>Software Engineer</p>
              <div>
                <a href="https://github.com/xanderjakeq">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://github.com/favicon.ico"
                    alt="github logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/xanderjakeq/">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="linkedin logo"
                  />
                </a>
              </div>
            </li>
            <li>
              <img
                src="https://avatars0.githubusercontent.com/u/13532991?s=400&v=4"
                alt="Kevin Brack"
              />
              <h4>Kevin Brack</h4>
              <p>Team Lead</p>
              <div>
                <a href="https://github.com/KevinBrack">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://github.com/favicon.ico"
                    alt="github logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/kevin-brack-273a25a0/">
                  {" "}
                  <img
                    className="linkedImg"
                    src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                    alt="linkedin logo"
                  />
                </a>
              </div>
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
  .linkedImg {
    height: 35px;
    width: 35px;
    margin: 4px;
    padding: 4px;
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
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-direction: row;
    list-style: none;
    margin: 5px;
    padding: 2px 16px;
  }
  li {
    display: flex;
    flex-direction: column;
    max-width: 275px;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    transition: 0.3s;
    border-radius: 5px;
    margin: 15px;
    width: 100%;
    text-align: left;
    align-self: flex-start;
  }
  img {
    width: 100%;
    border-radius: 6px 6px 0 0;
    height: auto;
  }
  h4 {
    font-size: 1.25rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    padding-top: 10px;
  }
  p {
    font-size: 0.9rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
  }
  a {
    font-weight: bold;
    font-size: 15px;
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
      width: 90%;
      margin: 0 auto;
    }
    li {
      align-self: unset;
    }
  }
  @media (max-width: 500px) {
    font-size: 1.2em;
    ul {
      width: 80%;
      margin: 0 auto;
    }
    li {
      img {
        margin-bottom: 10px;
      }
    }
    h4 {
      font-size: 1rem;
      padding: 5px;
      text-align: center;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 300px) {
    ul {
      h4 {
        font-size: 0.8rem;
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
