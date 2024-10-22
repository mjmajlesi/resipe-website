import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getInformation } from '../api';
import Carts from '../components/Carts';
import Container from '../components/container';
import Button from '../components/buttuns';

type Tresipe = {
  title: string,
  image: string,
}

function Recipe() {

  const [valuerecipe, Setvaluerecipe] = useState<Tresipe>()
  let params = useParams();

  useEffect(() => {
    getInformation(params.name).then((res) => (
      Setvaluerecipe(res)
    ))
  }, [])
  return (
    <Container>
      <div>
        <h1>{valuerecipe?.title}</h1>
        <img src={valuerecipe?.image} alt="" />
      </div>
      <div>
        <Button variant='dark'>
          Instructions
        </Button>
        <Button variant='normal' className='border-2'>
          Ingredients
        </Button>
      </div>
    </Container>
  )
}

export default Recipe