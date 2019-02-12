
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  console.log(argv);

  geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    console.log("Results: ", results);
    if(errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(results.address);

      weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if(errorMessage) {
          console.log(errorMessage);
        } else {
          // console.log(JSON.stringify(weatherResults, undefined, 2));
          console.log(`It's currently ${weatherResults.temperature}. It feels like ${ weatherResults.apparentTemperature}`);
        }
      });
    }
  });

  // weather.getWeather(lat, lng, callback);


//   // console.log(encodeURIComponent(argv.address));
//   // decodeURIComponent()
