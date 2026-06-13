import places from "../data/discover.mjs";


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

const grid =
document.querySelector("#discoverGrid");

places.forEach((place, index)=>{

const card = document.createElement("article");

card.classList.add(
"discover-card",
`card${index+1}`
);

card.innerHTML=`
    <h2>${place.name}</h2>

    <figure>
    <img
    src="${place.image}"
    alt="${place.name}"
    loading="lazy"
    width="300"
    height="200">
    </figure>

    <address>
    ${place.address}
    </address>

    <p>
    ${place.description}
    </p>

    <button>
    Learn More
    </button>
`;

grid.append(card);

});



const visit=
document.querySelector(
"#visitMessage"
);

const today=
Date.now();

const previous=
localStorage.getItem(
"lastVisit"
);

let message="";

if(!previous){

message=
"Welcome! Let us know if you have any questions.";

}

else{

const days=
Math.floor(
(today-Number(previous))
/
86400000
);

if(days<1){

message=
"Back so soon! Awesome!";

}

else{

message=
`You last visited ${days}
${days===1?"day":"days"} ago.`;

}

}

visit.textContent=
message;

localStorage.setItem(
"lastVisit",
today
);

function updateFooter(){
    const date = new Date()
    currentYear.textContent = date.getFullYear()
    lastModified.textContent = document.lastModified
    return
}

updateFooter()
menuBtn.addEventListener("click", handleMenuBtn)
