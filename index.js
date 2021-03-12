const MyFunction = () => {
    
    document.querySelector(".date").innerHTML = new Date().toLocaleDateString();
    
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
MyFunction();

    const weekWeather = () => {

        // api variables
        let city= document.getElementById("cityInput").value;
        const apiKey ='c78f9fadb172b531db5fe1fd50eafa7f'; 
        let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        const week=['monday','tuesday','wednesday','thursday','friday','saturday','sunday']

            const contentWeek = document.querySelector(".contentWeek")

                if (contentWeek.style.display === 'none') {
                    contentWeek.style.display = "flex"
                } else {
                    contentWeek.style.display = "none"
                }

        fetch(api)
            .then(response => 
                response.json())

                    .then(data => {
                        let icon= "<img src='" + `http://openweathermap.org/img/w/10d.png`+"'" + "style='width: 60px;' alt='Icon'></img>";
                        document.querySelector(".dayOne").innerHTML= Math.round((data.list[0].main.temp)-273) + "°C" + " on " + new Date(new Date().getTime() + 1*86400000).toDateString();
                        document.querySelector(".dayOneImg").innerHTML= icon
                        
                        document.querySelector(".dayTwo").innerHTML= Math.round((data.list[8].main.temp)-273) + "°C" + " on " + new Date(new Date().getTime() + 2*86400000).toDateString();
                        document.querySelector(".dayTwoImg").innerHTML= icon

                        document.querySelector(".dayThree").innerHTML= Math.round((data.list[16].main.temp)-273) + "°C" + " on " + new Date(new Date().getTime() + 3*86400000).toDateString();
                        document.querySelector(".dayThreeImg").innerHTML= icon

                        document.querySelector(".dayFour").innerHTML= Math.round((data.list[24].main.temp)-273) + "°C" + " on " + new Date(new Date().getTime() + 4*86400000).toDateString();
                        document.querySelector(".dayFourImg").innerHTML= icon

                        document.querySelector(".dayFive").innerHTML= Math.round((data.list[32].main.temp)-273) + "°C" + " on " + new Date(new Date().getTime() + 5*86400000).toDateString();
                        document.querySelector(".dayFiveImg").innerHTML= icon

                    })
        }


