If you are reading this then you are about to experience my first Weather App! Well, my 
first weather app for a tech challenge.

Weather App is written by me, Vince Kolb-Lugo, a candidate for App Developer at Adaptavist.

Below are a set of instructions for how to set up the app.

GETTING STARTED

First, navigate to the directory where you wish to put the app. If you prefer, create a new test folder with

`mkdir app-folder`

`cd app-folder`

Starting with a zipped folder, enter the following command to extract the contents:

`unzip weather-app.zip`

Next, type the following command to ensure all packages are installed:

`npm i`

Assuming all packages install correctly, start development server by typing:

`npm start`

This will spin up the development server and simultaneously open the weather app
in the default web browser as localhost:3000.

If for any reason some of the packages did not install, type these commands:

`npm i react react-router-dom react-bootstrap react-select react-select-async-paginate`


OTHER THINGS TO CONSIDER

Included in the project file are api keys registerd to me, Vince, but you may wish to 
use your own keys. If that is the case, you will need to register two keys:

- Open Weather Map: https://openweathermap.org/api
- Rapid API's GeoDB: https://rapidapi.com/wirefreethought/api/geodb-cities