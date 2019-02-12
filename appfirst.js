const request = require('request');
const yargs = require('yargs')
const geocode = require('./geocode/geocode');

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

  console.log(encodeURIComponent(argv.address));
  // decodeURIComponent()

  const address = encodeURIComponent(argv.address);

request({
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=CteODZ7ezFB9kaLDwlrrGaRKWA6LIt47&location= ${address}`,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  // console.log(response);
  if(error) {
    console.log("Unable to conect to Mapquest Servers");
  } else if (body.status === 'ZERO_RESULTS') {
    console.log("Unable to find that address");
  } else if (body.status === "OK") {

  }  else {
    console.log(`Address: ${body.results[0].providedLocation.location }`);
    console.log(`Latitide: ${body.results[0].locations[0].latLng.lat }`);
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng }`);

  }

})

// mapquest key: CteODZ7ezFB9kaLDwlrrGaRKWA6LIt47
// weather api key c6ffe4a0df86c7c3592f14030938b1fe
