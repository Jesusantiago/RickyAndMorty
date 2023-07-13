import { getCharacter } from "./getData.js";

const main = document.getElementById("main")
const loader = document.getElementById("loader")
const id = localStorage.getItem("charID")

const loadCharacter = async (id) =>{

    const data = await getCharacter(id)

    loader.style.display = "none";

    const article = document.createElement("article") 
        article.setAttribute("class", "characters")
        article.innerHTML = `
            <div class="img_before"></div>
            <img src="${data.image}" alt="character's ${data.name}">
            <div class="img_after"></div>
            <div class="charactersText">
                <h2>${data.name}</h2>
                <p>${data.species}</p>
                <p>${data.gender}</p>
                <p>${data.status}</p>
            </div>
            `;
            main.appendChild(article)


}

loadCharacter(id)