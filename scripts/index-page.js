const url = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={4ef30b9089e6aebb1f6c0702cbbd1b18}" ; 
console.log(url);

async function fetchWeather(){
    const response = await axios.get(url);
    return response;
}

let response = fetchweather();
console.log(response.data);
console.log(response.data.data);
