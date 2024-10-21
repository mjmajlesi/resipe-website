import React, { useEffect, useState } from 'react'
import { getSearched } from '../api'
import { useParams } from 'react-router-dom'
import { Irecipes } from './Populer'
import Carts from './Carts'
import Container from './container'
import { Grid } from '../pages/Cuisine'

function Searched() {

    const params = useParams()

    const [valueSearched, SetValueSearched] = useState<Irecipes[]>()

    useEffect(() => {
        getSearched(params.search).then((res) => {SetValueSearched(res.results)
            console.log(res)
        })
    }, [params.search])
    return (
        <Container>
            <h1 className='text-center font-bold text-xl my-6'> {params.search}</h1>
            <Grid>
                {valueSearched?.map((items) => (
                    <Carts key={items.id}
                        {...items}
                    />
                ))}
            </Grid>
        </Container>
    )
}

export default Searched