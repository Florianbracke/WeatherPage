const MyFunction = () => {
    
    //TODO: get weather map

        //for adding icons later ($weather will be number like '50d', see data.weather.icon)
    //let icon = `http://openweathermap.org/img/wn/${weather}@2x.png`

    document.getElementById("citySubmit").addEventListener("click", () => {
        event.preventDefault();

        let city= document.getElementById("cityInput").value;
        const apiKey ='c78f9fadb172b531db5fe1fd50eafa7f'; 

        let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        
        console.log(city);
        
        fetch(api)
            .then(response => 
                response.json())

            .then(data => {

                 console.log(data)
                 console.log()
                 
                 document.querySelector(".weatherResult").innerHTML= Math.round((data.list[0].main.temp)-273) + "°C" 
                 document.querySelector(".weatherDescription").innerHTML= data.list[0].weather[0].description
                 document.querySelector(".weatherIcon").innerHTML= "<img src='" + `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`+"'" + "style='width: 80px;' alt='Icon'></img>"
            }); 
    })
}
MyFunction();

