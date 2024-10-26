import { Irecipes } from './Populer';
import { SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CartsMainPage({ title, image , id }: Irecipes) {
  return (
    <SplideSlide >
      <Link to={`./recipe/${id}`}>
        <div className='min-h-80 overflow-hidden relative rounded-2xl'>
          <h1 className='line-clamp-1 z-10 absolute bottom-[0%] text-white text-center w-full h-[40%] flex items-center justify-center text-xs'>{title}</h1>
          <img className='rounded-2xl absolute left-0  w-full h-full object-cover' src={image} alt={title} />
          <Gradient />
        </div>
      </Link>
    </SplideSlide>
  )
}

const Gradient = styled.div`
  z-index : 3;
  position : absolute;
  width : 100%;
  height : 100%;
  border-radius : 1.5rem;
  background : linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.5))
`;



export default CartsMainPage;