import axios from 'axios';

export const getPopuler = async ()=>{
    const {data} = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)

    return data
}