// const request = require ("request")
// const geocode = require ("./data1/geocode")
// const forecast = require ("./data1/forecast")
// const url = "http://api.weatherapi.com/v1/current.json?key=98f08dd4190e4d66b46103642262806&q=London&aqi=no"

// const country = process.argv[2];

// if (country) {
//     console.log ("Please enter a country name")
// }else{
//     geocode (country, (error , geoData1) => {
//         if (error) {
//             console.log("Error:" , error)
//         }else{
//             forecast(geoData1.latitude , geoData1.longtitude , (error , weatherData1)=>{
//                 if (error) {
//             console.log("Error:" , error)
//         } else {
//                 console.log("Country:" , geoData1.name)
//                 console.log("Latitude:" , geoData1.latitude)
//                 console.log("Longtitude:" , geoData1.longtitude)
//                 console.log("Temperature:" , weatherData1.temperature + "C")
//         }
//             })
//         }
//     })
// }
// const forecast = (latitude , longtitude , callback) => {


// const request = require ("request")

// const geocodeUrl= "https://api.weatherapi.com/v1/current.json?key=98f08dd4190e4d66b46103642262806&q=" + latitude + "," + longtitude
// request ({url: geocodeUrl , json : true } , (error , response) => {
//         if (error) {
//         callback ("Unable to connect to weather service." , undefined)
//         }else if (response.body.error){
//         callback ("response.body.error.message" , undefined)
//         }else{
//             callback (undefined , response.body.location.name + " It is : " + response.body.current.condition.text)

//             // console.log(response.body.location.name , response.body.current.conditiom.text)
//         }
// })
// }

const geocode = require ("./data1/geocode")



const forecast = require ("./data1/forecast")


const country = process.argv[2]

    geocode (country, (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : " , data)

    
    forecast(data.latitude , data.longitude, (error , data) => {
        console.log( "ERROR :" , error)
        console.log( "DATA :" , data)
    })

})




// const request = require ("request")

// const geocodeUrl= "https://api.weatherapi.com/v1/current.json?key=98f08dd4190e4d66b46103642262806&q=London&aqi=no" + latitude + "," + longtitude
// request ({url: geocodeUrl , json : true } , (error , response) => {
//         if (error) {
//         console.log("Unable to connect to weather service.")
//         }else if (response.body.message){
//         console.log(response.body.message)
//         }else if(response.body.error){
//             console.log("Unable to find location")
//         }else{
//             const longtitude = response.body.location.lon

//             const latitude = response.body.location.lat

//             console.log(latitude , longtitude)
//         }
// })



