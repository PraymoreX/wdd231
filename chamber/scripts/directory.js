const menuBtn = document.querySelector("#menu")
const nav = document.querySelector("#nav-bar")
const membersContainer = document.querySelector("#members")
const categories = document.querySelector("#category")
const clearBtn = document.querySelector("#clear-btn")
const gridBtn = document.querySelector("#grid-btn")
const listBtn = document.querySelector("#list-btn")
const lastModified = document.querySelector("#last-modified")
const currentYear = document.querySelector("#currentyear")

membersContainer.classList.add("grid-view");
menuBtn.addEventListener("click", handleMenuBtn)

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

async function getMembers() {
  try {
    const response = await fetch("data/members.json");

    const data = await response.json();

    filterMembers(data);

  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

const filterMembers = (members) => {
    membersContainer.innerHTML = "";
    if(categories.value === "All"){
     displayMembers(members)
     return
    }
    const filtered = members.filter(member =>{
        return member.category === categories.value 
    })
    displayMembers(filtered)
}

function displayMembers(members) {
    members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add('card');
    const image = document.createElement("img");
    const category = document.createElement("p");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("p");
    
    image.src = member.image;
    image.alt = "Company Logo";
    category.textContent = member.category;
    name.textContent = member.name;
    description.textContent = member.description;
    phone.textContent = member.phone;
    website.textContent = member.website;
    
    if(membersContainer.classList.contains("grid-view")){
        card.appendChild(image);
        card.appendChild(category);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(phone);
        card.appendChild(website);
        membersContainer.appendChild(card);
    }
    else if(membersContainer.classList.contains("list-view")){
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(website);
        membersContainer.appendChild(card);
    }
  });
}

const clear = () => {
    categories.value = "All";
    getMembers()
}

const addGrid = () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
    getMembers();
}

const addList = () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view")
    getMembers();
}

function updateFooter(){
    const date = new Date()
    currentYear.textContent = date.getFullYear()
    lastModified.textContent = document.lastModified
    return
}

categories.addEventListener("change", getMembers);
clearBtn.addEventListener("click", clear)
gridBtn.addEventListener("click", addGrid);
listBtn.addEventListener("click", addList);
getMembers();
updateFooter()
