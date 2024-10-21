import React, { useEffect } from 'react'
import { getVegetarian } from '../api';
import Carts from './CartsMainPage';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import useLocalStorage from './useLocalStorage';
import { Irecipes } from './Populer';
import Container from './container';
import CartsMainPage from './CartsMainPage';

function Veggie() {

    const [Veggie, setveggie] = useLocalStorage<Irecipes[]>("Veggie", []);
    useEffect(() => {
        getVegetarian().then(res =>
            setveggie(res.recipes)
        )
    }, [])

    return (
        <Container>
            <div className=' mt-8'>
                <h2 className='mb-3'>Our Vegetarian Picks</h2>
                <Splide options={{
                    perPage: 4,
                    pagination: false,
                    arrows: false,
                    drag: 'free',
                    gap: '4rem'
                }}>
                    {
                        Veggie.map(recipe => (
                            <CartsMainPage key={recipe.id} {...recipe} />
                        ))
                    }
                </Splide>
            </div>
        </Container>
    )
}

export default Veggie