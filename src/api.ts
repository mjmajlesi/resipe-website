import axios from 'axios';

export const getPopuler = async ()=>{
    const {data} = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)

    return data;
}

export const getVegetarian = async ()=>{
    const {data} = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)

    return data;
}

export const getCuisine = async (name: string | undefined)=>{
    const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)

    return data;
}
export const getSearched = async (name: string | undefined)=>{
    const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)

    return data;
}