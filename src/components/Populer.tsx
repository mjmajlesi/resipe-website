import React, { useEffect } from 'react'
import { getPopuler } from '../api';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import useLocalStorage from './useLocalStorage';
import Container from './container';
import CartsMainPage from './CartsMainPage';
export interface Irecipes {
    title: string,
    dishTypes: "lunch" | "soap" | "main course" | 'main dish' | "dinner",
    id: number,
    image: string,
    vegan: boolean,
    veryPopuler: boolean,
    
}
function Populer() {

    const [Populer, setPopuler] = useLocalStorage<Irecipes[]>("Popular", []);
    useEffect(() => {
        getPopuler().then(res =>
            setPopuler(res.recipes)
        )
    }, [])

    return (
        <Container>
            <div className=' mb-4'>
                <h2 className='mb-3 text-base '>Our Vegetarian Picks</h2>
                <Splide options={{
                    perPage: 3,
                    pagination: false,
                    arrows: false,
                    drag: 'free',
                    gap: '3rem'
                }}>
                    {
                        Populer.map(recipe => (
                            <CartsMainPage key={recipe.id} {...recipe} />
                        ))
                    }
                </Splide>
            </div>
        </Container>
    )
}

export default Populer