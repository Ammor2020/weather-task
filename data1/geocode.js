const request = require ("request")
const geocode = (address , callback) => {
    
    const geocodeUrl = "https://api.weatherapi.com/v1/current.json?key=98f08dd4190e4d66b46103642262806&q=" + address + "&aqi=no"
    request ({url : geocodeUrl, json: true }, (error , response) => {
        if (error) {
            callback ("Unable to connect to geocoding service" , undefined)
        }else if (response.body.error){
            callback(response.body.error.message , undefined)
        }else{
            callback(undefined, {
                latitude : response.body.location.lat,
                longitude : response.body.location.lon
                

            })
        }
    })
};
module.exports = geocode;
