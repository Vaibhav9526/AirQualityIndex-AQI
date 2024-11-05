const apikey = "1645f9116cb5db5e900fc3cd12de6990725c3784";
const apiurl = "https://api.waqi.info/feed/";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `/?token=${apikey}`);

  var data = await response.json();

  if (data.status == "error") {
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".owm").href = "https://www.aqi.in/in?country-find=" + city;
    document.querySelector(".weathername").innerHTML = "Can't find station of this place, kindly check it here";
    document.querySelector(".weathername").style.marginTop = "40px"
    document.querySelector(".card").style.background ="#3C3D37";
    document.querySelector(".temp").style.display = "none";

  } else {
    document.querySelector(".owm").href ="https://www.aqi.in/in?country-find=" + city;
    document.querySelector(".temp").innerHTML = data.data.aqi;
    document.querySelector(".weather").style.display = "block";
    // document.querySelector(".weathername").innerHTML = "AQI";

    if (data.data.aqi <= 50) {
      document.querySelector(".weathername").innerHTML = "GOOD";
      // document.querySelector(".temp").style.color = "#16423C";
      document.querySelector(".card").style.background =
        "linear-gradient(135deg, #D3EE98, #A0D683, #72BF78)";
      console.log("A");
    }

    if (data.data.aqi > 50 && data.data.aqi <= 100) {
      document.querySelector(".weathername").innerHTML = "MODERATE";
      // document.querySelector(".temp").style.color = "white";
      document.querySelector(".card").style.background =
        "linear-gradient(135deg, #F3FEB8, #FFDE4D, #FFB22C)";
      console.log("B");
    }

    if (data.data.aqi > 100 && data.data.aqi <= 150) {
      document.querySelector(".weathername").innerHTML = "Unhealthy for Sensitive Groups";
      // document.querySelector(".temp").style.color = "#16423C";
      document.querySelector(".card").style.background =
        "linear-gradient(135deg, #FFE6A5, #FFBF61, #EC8305)";
      console.log("c");
    }

    if (data.data.aqi > 150 && data.data.aqi <= 200) {
      document.querySelector(".weathername").innerHTML = "Unhealthy";
      // document.querySelector(".temp").style.color = "#16423C";
      document.querySelector(".card").style.background =
        "linear-gradient(135deg, #D95F59, #C63C51, #8C3061)";
      console.log("d");
    }

    if (data.data.aqi > 200 && data.data.aqi <= 300) {
      document.querySelector(".weathername").innerHTML = "Very Unhealthy";
      // document.querySelector(".temp").style.color = "#E8FFCE";
      document.querySelector(".card").style.background =
        "linear-gradient(135deg, #E4B1F0, #7E60BF, #433878)";
      console.log("e");
    }

    if (data.data.aqi > 300) {
      document.querySelector(".weathername").innerHTML = "Hazardous";
      // document.querySelector(".temp").style.color = "#16423C";
      document.querySelector(".card").style.background =
        "linear-gradient(135deg, #AF1740, #740938, #3D0301)";
      console.log("f");
    }
  }
  console.log("JS BY VAIBHAV SHARMA");
  console.log(data);
}
searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});

searchbox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkweather(searchbox.value);
  }
});
