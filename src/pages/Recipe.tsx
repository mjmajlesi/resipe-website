import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getInformation } from '../api';
import Container from '../components/container';
import Button from '../components/buttuns';
import styled from 'styled-components';

type Tresipe = {
  title: string,
  image: string,
  summary: string,
  Instructions: string,
}

function Recipe() {

  const [valuerecipe, Setvaluerecipe] = useState<Tresipe>()
  const [ActiveTab, SetActiveTab] = useState("Instructions")
  let params = useParams();

  useEffect(() => {
    getInformation(params.name).then((res) => (
      Setvaluerecipe(res)
    ))
  }, [])
  return (
    <Container>
      <Datialrecipe>
        <div className='flex flex-col items-center'>
          <h1 className='mb-8 font-semibold'>{valuerecipe?.title}</h1>
          <img width={400} className='rounded-lg' src={valuerecipe?.image} alt="" />
        </div>
        <div>
          <Button
            onClick={() => SetActiveTab("Instructions")}
            variant='normal'
            className={ActiveTab === "Instructions" ? "active" : ""}
          >
            Instructions
          </Button>
          <Button
            onClick={() => SetActiveTab("Ingredients")}
            className={ActiveTab === "Ingredients" ? "active" : ""}
            variant='normal'
          >
            Ingredients
          </Button>
          <div>
            {valuerecipe?.summary ? (
              <h3 dangerouslySetInnerHTML={{ __html: valuerecipe.summary }} />
            ) : (
              <p>No summary available</p>
            )}
          </div>
        </div>
      </Datialrecipe>
    </Container>
  )
}

const Datialrecipe = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 100px;
  .active {
    background: linear-gradient(45deg , #494949 , #313131);
    color: white !important;
  }
`

export default Recipe