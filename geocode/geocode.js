const request = require('request');

var geocodeAddress = (userAddress, callback) => {
  const address = encodeURIComponent(userAddress);

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=CteODZ7ezFB9kaLDwlrrGaRKWA6LIt47&location=${address}`,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    // console.log(response);
    if(error) {
      callback("Unable to conect to Mapquest Servers")
      // console.log("Unable to conect to Mapquest Servers");
    } else if (body.status === 'ZERO_RESULTS') {
      callback("Unable to find that address")
      // console.log("Unable to find that address");
    }
    else {
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      })
    }
  });
};


module.exports = {
  geocodeAddress
}

// or module.exports.geocodeAddress = geocodeAddress
