
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const city = document.querySelector("#city")
const temp = document.querySelector("#temp")
const desc = document.querySelector("#desc")

btn.addEventListener("click", () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
input.value +
"&appid=5ea20c34427b9975a24ca2c9d4b64486")
    .then(res => res.json())
    .then(data => {
        cityName = data.name;
        tempVal = data["main"]["temp"]
        descVal = data["weather"][0]["description"]

        city.innerHTML = "City: " + cityName;
        temp.innerHTML = "Temperature: " + (parseInt(tempVal - 273) + "°")
        desc.innerHTML = "Cloud: " + descVal
    })
    .catch((error) => alert("You must have inserted a non-exixtent city"))
})
