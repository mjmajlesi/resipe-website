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
            <h1 className='text-center font-semibold text-3xl my-10'> {params.type}</h1>
            <Grid
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {Cuisine.map((items) => (
                    <Carts key={items.id}
                        {...items}
                    />
                ))}
            </Grid>
        </Container>
    )
}

export const Grid = styled(motion.div)`
display : grid;
grid-template-columns : repeat(auto-fit , minmax(20rem , 1fr));//
grid-gap : 3rem;
`


export default Cuisine