# earth-meteorites

A website to view the closest meteorite landings near you. Data is taken from NASA.

## Demo

The site is hosted using AWS Amplify, and can be found here: [https://meteors.devinkott.com/](https://meteors.devinkott.com/).


## Instructions

1. Click the *Enable Location* button. This finds your latitude and longitude. Once that is found, the meteorites data is also laoded.
2. The slider represents the distance away from your current location that meteorites are shown. This is because there are 1,000 locations that could be graphed; when all *are* graphed, the map lags a bit. Using the distance slider will speed up the graph and only show you landings near where you're located.
3. Click on a marker to see the location and year.


## Building

1. Clone repository
2. `npm install`
3. `npm run start`