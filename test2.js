
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/dharwad.json?access_token=pk.eyJ1IjoicHJhbW9ka3VtYXJzaCIsImEiOiJja2d0cnp4aTIwNmpjMnNxbGZ0dXhvODE0In0.PbswEBMK6PJJWWMFgUs3Gw&limit=1`
const fetch = require('node-fetch')

try {
    fetch(geocodeURL, {
        method: 'get',
        body: JSON.stringify(),
    })
        .then(res => res.json())
        .then(json => {
            const long = json.features[0].center[0];
            const lat = json.features[0].center[1];
            console.log(`${long} and ${lat}`)
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b013729da264a9f8bb365ba74e4f4c89&units=metric`
            fetch(url, {
                method: 'get',
                body: JSON.stringify(),
                // headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json.coord),
                        console.log(`Its is currently ${json.main.temp} out there in ${json.name}`)
                })
        })
} catch (error) {
    console.log('error 404')
}





