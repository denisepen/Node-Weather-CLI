const request = require('request');

// next step is to use axios for promises to eliminate need for callbacks.

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/c6ffe4a0df86c7c3592f14030938b1fe/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      // console.log(body.currently.temperature);
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
       });
    } else {
      // console.log("Unable to fetch weather.");
      callback("Unable to fetch weather.");
    }

  })
};



module.exports.getWeather = getWeather;
