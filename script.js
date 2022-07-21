let weather = {
    "apiKey" : "518acb25102a32b26c50a1fee2b7e7bb", 
    fetchWeather: function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={518acb25102a32b26c50a1fee2b7e7bb}')
        .then(response => response.json())
        .then(data => console.log(data));
    },
};
