# Weather application

## Purpose

This is a weather application specially designed to explore stubbing of APIs.

It is a web based application which calls [OpenWeather](https://openweathermap.org/) endpoint to display current weather of any place.

## Pre-requisities

1. **Npm** - If you use homebrew, run the command:  

```shell
brew install npm
```

else install npm using [instructions here](https://www.npmjs.com/get-npm)

2. **OpenWeather API key**- The application would also start without a key but to hit the OpenWeather endpoint, a key is needed.

Follow their instructions to [get an API key](https://home.openweathermap.org/users/sign_up).
60 calls/minute can be made with this key. See Further details [here](https://openweathermap.org/price).

Update your key in (Apps.js file)[https://github.com/ShivaniGaba1/weather-app/blob/master/src/App.js#L8]

## Run application

To start the application, run the command:  

```shell
npm start
```

The application will be started at http://localhost:3000. Use any preferred browser to see the application.

## Wiremock project code

The project code for stubbing using wiremock can be found [here](https://github.com/ShivaniGaba1/wiremock-weather)

## Switching between actual server and mock server

There is a dropdown on UI to swtiching between the 2 servers. This logic is defined in [Form.js file](https://github.com/ShivaniGaba1/weather-app/blob/master/src/components/Form.js)
