import { getCharacter, getCharacters, getEpisodes } from "./getData.js";

const listCharacter = document.getElementById("listCharacter")
const loader = document.getElementById("loader")

const listCharacters = async (page = 1)=>{

    const { results } = await getCharacters(page);
    loader.style.display = "none"
    results.forEach( character => {
        const article = document.createElement("article") 
        article.setAttribute("class", "characters")
        article.innerHTML = `
            <img src="${character.image}" alt="character's ${character.name}">
            <div class="characterText">
                <h2>${character.name}</h2>
                <p><img src="../src/icon/${character.status}.png" >${character.status}</p>
                <p><img src="../src/icon/alien.png">${character.species}</p>
                <p><img src="../src/icon/planet.png">${character.origin.name}</p>
                
            </div>
            <a href="/#/${character.id}" id="btn" >
                <img src="../src/icon/Info.png">
            Ver detalle</a>
            `;
            listCharacter.appendChild(article)
    });
};

listCharacters();

const listEpisode = document.getElementById("listEpisode");

// const array = [1,2,3,4,5,6]
const listEpisodes = async (page = 1)=>{

    const {results} = await getEpisodes(page);
        results.forEach(results=>{
            const article = document.createElement("article")
            article.setAttribute("class", "episodes swiper-slide")
            article.innerHTML = `
                <h3><img src="../src/icon/Play.png"> ${results.name} | ${results.episode} </h3>
                <a href="/#/${results.id}" id="btn" >
                <img src="../src/icon/Info.png">
                    Ver detalle</a>

                <btn href="#">
                    <img src="../src/icon/heartColor .png"
                </btn>
                `;
            listEpisode.appendChild(article)
        })
}

listEpisodes();



// window.addEventListener("hashchange", ()=>{
//     const id = location.hash.slice(1).toLocaleLowerCase().split("/")[1]
//     localStorage.setItem("charID", id);
//     window.location.replace("./character.html")
// })


//scroll

var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });