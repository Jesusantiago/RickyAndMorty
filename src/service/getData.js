const baseURL = "https://rickandmortyapi.com/api"; //Declaramos la ruta

/*
Iniciamos una función asincrona para extraer un personaje en especifico.

@param id =  numero de personaje a solicitar
*/

const getCharacter = async (id)=>{ 
    const res = await fetch(`${baseURL}/character/${id}`)
    const data = await res.json();

    return data;
}

const getCharacters = async (page)=>{
    const res = await fetch(`${baseURL}/character/?page=${page}`)
    const data = await res.json();

    return data
}


const getEpisodes = async (page)=>{
    const res = await fetch(`${baseURL}/episode/?page=${page}`);
    const data = await res.json();
    
    return data
}


export {
    getCharacter,
    getCharacters,
    getEpisodes
};