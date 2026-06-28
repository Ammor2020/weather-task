// const request = require ("request")
// const apiKey = "d0f57315a2bf050fbc60d00c784b4e5f"
// const forecast = (latitude , longtitude, Callback) =>{
//     const url = "http://api.weatherapi.com/v1/current.json?key=98f08dd4190e4d66b46103642262806&q=London&aqi=no"
//                 request ({url , json: true }, (error , response) =>{
//                     if (error) {
//                         Callback("Unable to connect to weather service." , undefined)
//                     }else if (response.body.cod != 200) {
//                         Callback(response.body.message, undefined);
//                     }else {
//                         Callback(undefined, {
//                             temperature: response.body.main.temp
//                         })
//                     }
//                 })

// }
// module.exports = forecast
///////////////////////////////////////

const request = require ("request")

const forecast = (latitude , longitude , callback) => {




const geocodeUrl= "https://api.weatherapi.com/v1/current.json?key=98f08dd4190e4d66b46103642262806&q=" + latitude + "," + longitude
request ({url: geocodeUrl , json : true } , (error , response) => {
        if (error) {
        callback ("Unable to connect to weather service." , undefined)
        }else if (response.body.error){
        callback ("response.body.error.message" , undefined)
        }else{
            callback (undefined , response.body.location.name + " It is : " + response.body.current.condition.text 
                + " and temp is :"   + response.body.current.temp_c )

            // console.log(response.body.location.name , response.body.current.conditiom.text)
        }
})
}

module.exports = forecast