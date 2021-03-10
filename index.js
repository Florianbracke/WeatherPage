const MyFunction = () => {

if (document.getElementById("citySubmit").value =   null) {
document.querySelector(".contentWeek").style.display = 'hidden';
}

    document.getElementById("citySubmit").addEventListener("click", () => {
        event.preventDefault();

        

           // api variables
        let city= document.getElementById("cityInput").value;
        const apiKey ='c78f9fadb172b531db5fe1fd50eafa7f'; 
        let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;


        fetch(api)
            .then(response => 
                response.json())
                    .then(data => {
                        document.querySelector(".weatherResult").innerHTML= Math.round((data.list[0].main.temp)-273) + "°C" ;
                        document.querySelector(".weatherDescription").innerHTML= data.list[0].weather[0].description;
                        document.querySelector(".weatherIcon").innerHTML= "<img src='" + `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`+"'" + "style='width: 80px;' alt='Icon'></img>";
                        document.querySelector(".buttonFullWeek").innerHTML= "<button onclick='weekWeather()' id='buttonWeek'> Toggle week </button>";
                    }); 
            
    })
    

} 
// .substr(11, 8)

const weekWeather = () => {

     // api variables
     let city= document.getElementById("cityInput").value;
     const apiKey ='c78f9fadb172b531db5fe1fd50eafa7f'; 
     let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
     const week=['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
     
                    const contentWeek = document.querySelector(".contentWeek")

                        if (contentWeek.style.display === 'none') {
                            contentWeek.style.display = "block"
                        } else {
                            contentWeek.style.display = "none"
                        }

    fetch(api)
        .then(response => 
            response.json())

                .then(data => {
                    console.log(data)
                  
                    document.querySelector(".dayOne").innerHTML= Math.round((data.list[0].main.temp)-273) + "°C" + " on " + week[1+(new Date(data.list[0].dt)).getDay()]
                    document.querySelector(".dayTwo").innerHTML= Math.round((data.list[8].main.temp)-273) + "°C" + " on " + week[2+(new Date(data.list[8].dt)).getDay()]
                    document.querySelector(".dayThree").innerHTML= Math.round((data.list[16].main.temp)-273) + "°C" + " on " + week[3+(new Date(data.list[16].dt)).getDay()];
                    document.querySelector(".dayFour").innerHTML= Math.round((data.list[24].main.temp)-273) + "°C" + " on " + week[4+(new Date(data.list[24].dt)).getDay()];
                    document.querySelector(".dayFive").innerHTML= Math.round((data.list[32].main.temp)-273) + "°C" + " on " + week[5+(new Date(data.list[32].dt)).getDay()];
                    
                    
                    
                    
                })

}
MyFunction();


