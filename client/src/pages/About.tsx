import React from "react";
import styled from "styled-components";
import Container from "../components/container";

function About() {
  return (
    <Container>
      <Aboutrecipe>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga <br />
        sit, officiis maiores nisi assumenda fugit consequuntur a praesentium<br />
        laborum aliquam vitae enim repellat quod consequatur, recusandae vero<br />
        dicta veritatis!
      </Aboutrecipe>
    </Container>
  );
}

const Aboutrecipe = styled.div`
height: 59vh;
display: flex;
align-items: center;
justify-content: center;
`

export default About;
