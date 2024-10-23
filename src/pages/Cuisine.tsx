import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { getCuisine } from '../api';
import useLocalStorage from '../components/useLocalStorage';
import { Irecipes } from '../components/Populer';
import Carts from '../components/CartsMainPage';
import { styled } from 'styled-components';
import Container from '../components/container';

function Cuisine() {

    const [Cuisine, Setcuisine] = useLocalStorage<Irecipes[]>("cuisine", [])
    let params = useParams()

    useEffect(() => {
        getCuisine(params.type).then((res) => Setcuisine(res.results))
    }, [])


    return (
        <Container>
            <h1 className='text-center font-bold text-xl my-6'> { params.type }</h1>
            <Grid>
                {Cuisine.map((items) => (
                    <Carts key={items.id}
                        {...items}
                    />
                ))}
            </Grid>
        </Container>
    )
}

export const Grid = styled.div`
display : grid;
grid-template-columns : repeat(auto-fit , minmax(20rem , 1fr));//
grid-gap : 3rem;
`


export default Cuisine