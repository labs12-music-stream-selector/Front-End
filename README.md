# MOODIBEATS
* Free music for everyone!
* Music by mood!
* Copyright free music for video creators!
## Contributors

[Logan Hufstetler](https://github.com/BlissCatalyst)                                                               | [Davina Taylor](https://github.com/lilvina)                                                                      | [Joh Humphreys](https://github.com/johnpharmd)                                                                   | [Md Kawsar Hussen](https://github.com/kkingbd)                                                                   | [Jonathan Bernal](https://github.com/BlueSandWeb)                                                                | [Sammy Lee](github.com/Captmoonshot)                                                                             | [Xander Jake de los Santos](https://github.com/xanderjakeq)                                                      | 
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: |
|  [<img src="https://avatars2.githubusercontent.com/u/46465575?s=400&v=4" width = "200" />](https://github.com/BlissCatalyst)                                                                                                     |  [<img src="https://avatars0.githubusercontent.com/u/10713358?s=400&u=f3dd10a2ecfa7efa5b993fc63fd905cf14311fd3&v=4" width = "200" />](https://github.com/lilvina)                                                                 |  [<img src="https://avatars0.githubusercontent.com/u/6886907?s=400&v=4" width = "200" />](https://github.com/johnpharmd)                                                                                                        |  [<img src="https://avatars0.githubusercontent.com/u/46500263?s=400&v=4" width = "200" />](https://github.com/kkingbd)                                                                                                           |  [<img src="https://avatars3.githubusercontent.com/u/42630698?s=400&v=4" width = "200" />](https://github.com/BlueSandsWeb)                                                                                                      | [<img src="https://avatars1.githubusercontent.com/u/17155841?s=400&v=4" width = "200" />](https://github.com/Captmoonshot)                                                                                                      | [<img src="https://avatars2.githubusercontent.com/u/13279523?s=460&v=4" width = "200" />](https://github.com/xanderjakeq)                                                                                                       |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/BlissCatalyst)                       | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lilvina)                             | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/johnpharmd)                          | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kkingbd)                             | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/BlueSandsWeb)                        | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Captmoonshot)                        | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/xanderjakeq)                         |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/logan-hufstetler-145611a2/)                                                                                        | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/davinataylor123/)                                                                                                  | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/johnhumphreys/)                                                                                                    | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kkingbd)                                                                                                           |  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jon-bernal/)                                                                                                       |  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sammy-lee-89944282/)                                                                                               | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/xanderjakeq/)                                                                                                      |

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://moodybeats.netlify.com/)
---
## How To Run Locally
* Git Clone https://github.com/labs12-music-stream-selector/Front-End.git
* Run `yarn` in the directory of the cloned repository.
* Add `.env` file with the appropriate API address you are using in the root directory. (See Environment File Section of Readme)
* Run `yarn start` to run the React Application.
---
## Client Side Routes
* / - Landing Page/Google Login View
* /Home - Home/Lists of the songs and music player.
* /user - Profile view, also for editing profile.
---
## Environment File
The environment file is required to run this project. The reason is because we store our API URL inside of it, and it's used all over the client for HTTP request with the Axios library. The environment file must be in the root directory of the project, outside of the /src directory. For the environment variable to be used in the project, you must have an assignment like this. Where the value is the link to the API that is being used. In our code, this can be used with the variable `process.env.REACT_FE_API`.

* Local Host : `REACT_APP_FE_URL = 'http://localhost:3000'`
* Production : `REACT_APP_FE_API='https://fantabulous-music-finder.heroukuapp.com'`
---

# Style Guide
#### Languages & tools
* ### HTML
* ### JavaScript - [React](http://facebook.github.io/react) is used for UI.
* ### CSS
## Technologies Used in Project
* [React](https://reactjs.org/)
* [React-Router](https://github.com/ReactTraining/react-router#readme)
* [Axios](https://github.com/axios/axios)
* [styled-components](https://www.styled-components.com/)
* [OAuth](https://developers.google.com/actions/identity/google-sign-in-oauth)
* [Knex](https://knexjs.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Google-Api](https://console.developers.google.com/apis/dashboard?project=music-finder-239119&pli=1)
* [Fuse](https://fusejs.io/)

