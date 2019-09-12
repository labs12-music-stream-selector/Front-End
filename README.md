# MOODIBEATS

[description](./description.md)

- Free music for everyone!
- Music by mood!
- Copyright free music for video creators!

## Contributors

|                                            [Logan Hufstetler](https://github.com/BlissCatalyst)                                            |                                                           [Davina Taylor](https://github.com/lilvina)                                                            |                                         [Joh Humphreys](https://github.com/johnpharmd)                                         |                                     [Md Kawsar Hussen](https://github.com/kawsarhussen16)                                      |                                      [Jonathan Bernal](https://github.com/BlueSandWeb)                                      |                                                [Sammy Lee](github.com/Captmoonshot)                                                 |                                 [Xander Jake de los Santos](https://github.com/xanderjakeq)                                  | [Kevin Brack](https://github.com/KevinBrack) |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|        [<img src="https://avatars2.githubusercontent.com/u/46465575?s=400&v=4" width = "200" />](https://github.com/BlissCatalyst)         | [<img src="https://avatars0.githubusercontent.com/u/10713358?s=400&u=f3dd10a2ecfa7efa5b993fc63fd905cf14311fd3&v=4" width = "200" />](https://github.com/lilvina) |    [<img src="https://avatars0.githubusercontent.com/u/6886907?s=400&v=4" width = "200" />](https://github.com/johnpharmd)     |  [<img src="https://avatars0.githubusercontent.com/u/46500263?s=400&v=4" width = "200" />](https://github.com/kawsarhussen16)  | [<img src="https://avatars3.githubusercontent.com/u/42630698?s=400&v=4" width = "200" />](https://github.com/BlueSandsWeb)  |     [<img src="https://avatars1.githubusercontent.com/u/17155841?s=400&v=4" width = "200" />](https://github.com/Captmoonshot)      |   [<img src="https://avatars2.githubusercontent.com/u/13279523?s=460&v=4" width = "200" />](https://github.com/xanderjakeq)   |  [<img src="https://avatars1.githubusercontent.com/u/13532991?s=460&v=4" width = "200" />](https://github.com/KevinBrack) |
|                         [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/BlissCatalyst)                         |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lilvina)                                       |                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/johnpharmd)                     |                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kawsarhussen16)                   |                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/BlueSandsWeb)                  |                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Captmoonshot)                      |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/xanderjakeq)                   | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/KevinBrack) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/logan-hufstetler-145611a2/) |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/davinataylor123/)                 | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/johnhumphreys/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kawsarhussen16) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jon-bernal/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sammy-lee-89944282/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/xanderjakeq/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kevin-brack-273a25a0/) |

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://moodybeats.netlify.com/)

---

## How To Run Locally

- Git Clone https://github.com/labs12-music-stream-selector/Front-End.git
- Run `yarn` in the directory of the cloned repository.
- Add `.env` file with the appropriate API address you are using in the root directory. (See Environment File Section of Readme)
- Run `yarn start` to run the React Application.

---

## Client Side Routes

- / - Landing Page/Google Login View
- /Home - Home/Lists of the songs and music player.
- /user - Profile view, also for editing profile.

---

## Environment File

The environment file is required to run this project. The reason is because we store our API URL inside of it, and it's used all over the client for HTTP request with the Axios library. The environment file must be in the root directory of the project, outside of the /src directory. For the environment variable to be used in the project, you must have an assignment like this. Where the value is the link to the API that is being used. In our code, this can be used with the variable process.env.REACT_FE_API.

- Local Host : REACT_APP_FE_URL - This is the local host port url, optional for your local development server.
- Production : REACT_APP_FE_API - This is the production url for development server.

---

# Style Guide

#### Languages & tools

- ### HTML
- ### JavaScript - [React](http://facebook.github.io/react) is used for UI.
- ### CSS

## Technologies Used in Project

- [React](https://reactjs.org/)
- [React-Router](https://github.com/ReactTraining/react-router#readme)
- [Axios](https://github.com/axios/axios)
- [styled-components](https://www.styled-components.com/)
- [OAuth](https://developers.google.com/actions/identity/google-sign-in-oauth)
- [Knex](https://knexjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Google-Api](https://console.developers.google.com/apis/dashboard?project=music-finder-239119&pli=1)
- [Fuse](https://fusejs.io/)

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Issue/Bug Request

    * If you are having an issue with the existing project code, please submit a bug report under the following guidelines:
    * Check first to see if your issue has already been reported.
    * Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
    * Create a live example of the problem.
    * Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

## Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

## Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

### Pull Request Guidelines

    * Ensure any install or build dependencies are removed before the end of the layer when doing a build.
    * Update the README.md with details of changes to the interface, including new environment variables, exposed ports, useful file locations and container parameters.
    * Ensure that your code conforms to our existing code conventions and test coverage.
    * Include the relevant issue number, if applicable.
    * You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend Documentation](https://github.com/labs12-music-stream-selector/Backend/blob/master/README.md) for details on the backend of our project.
