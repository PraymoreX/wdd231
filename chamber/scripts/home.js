const menuBtn = document.querySelector("#menu")
const nav = document.querySelector("#nav-bar")
const lastModified = document.querySelector("#last-modified")
const currentYear = document.querySelector("#currentyear")

function handleMenuBtn(){
    if(!menuBtn.classList.contains("show")){
        nav.classList.add("show")
        menuBtn.classList.add("show");
        return
    }
    else{
        nav.classList.remove("show")
        menuBtn.classList.remove("show");
        return
    }
}

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const spotlightContainer = document.querySelector("#spotlight-container");

const apiKey = "05d30a03754e2c04b4dd94ca5fdda7f5";

const weatherURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=6.6885&lon=-1.6244&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {

        const response = await fetch(weatherURL);

        if (!response.ok) {
            throw new Error("Weather data could not be loaded");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {

        console.error(error);

        currentTemp.textContent = "--";

        weatherDesc.textContent =
            "Weather unavailable";

        day1.textContent = "--";
        day2.textContent = "--";
        day3.textContent = "--";
    }
}

function displayWeather(data) {
    const current = data.list[0];

    const temp =
        Math.round(current.main.temp);

    const description =
        current.weather[0].description;

    currentTemp.textContent = `${temp}`;

    weatherDesc.textContent =
        capitalizeWords(description);

    const forecastOne =
        Math.round(data.list[0].main.temp);

    const forecastTwo =
        Math.round(data.list[8].main.temp);

    const forecastThree =
        Math.round(data.list[16].main.temp);

    day1.innerHTML =
        `<strong>Today:</strong> ${forecastOne}°C`;

    day2.innerHTML =
        `<strong>Tomorrow:</strong> ${forecastTwo}°C`;

    day3.innerHTML =
        `<strong>Day 3:</strong> ${forecastThree}°C`;
}

function capitalizeWords(text) {

    return text
        .split(" ")
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");
}

getWeather();

const membersURL = "data/members.json";

async function getSpotlights() {

    try {

        const response = await fetch(membersURL);

        if (!response.ok) {
            throw new Error("Member data not found");
        }

        const data = await response.json();

        displaySpotlights(data);

    } catch (error) {
        console.error(error);
    }
}

function displaySpotlights(members) {

    const qualifiedMembers = members.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    const shuffledMembers = qualifiedMembers.sort(() => 0.5 - Math.random());

    const selectedMembers = shuffledMembers.slice(0, 3);

    selectedMembers.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo" loading="lazy">

            <div class="spotlight-content">
                <h3>${member.name}</h3>

                <p>${member.address}</p>

                <p>${member.phone}</p>

                <p>
                    <strong>${member.membership} Member</strong>
                </p>

                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </div>
        `;

        spotlightContainer.appendChild(card);

    });
}

getSpotlights();

function updateFooter(){
    const date = new Date()
    currentYear.textContent = date.getFullYear()
    lastModified.textContent = document.lastModified
    return
}

updateFooter()
menuBtn.addEventListener("click", handleMenuBtn)
