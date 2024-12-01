import { Irecipes } from './Populer';
import { SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CartsMainPage({ title, image , id }: Irecipes) {
  return (
    <SplideSlide >
      <Link to={`./recipe/${id}`}>
        <CartMain>
          <h1 className='line-clamp-1 z-10 absolute bottom-[0%] text-white text-center w-full flex items-center justify-center text-xl'>{title}</h1>
          <img className='rounded-2xl absolute left-0  w-full h-full object-cover' src={image} alt={title} />
          <Gradient />
        </CartMain>
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
  background : linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.6))
`;

const CartMain = styled.div`
  min-height: 320px;
  overflow: hidden;
  position: relative;
  border-radius: 15px;

  h1 {
    height: 40%; /* ارتفاع اولیه */
    transition: height 0.4s ease; /* تنظیم ترنزیشن برای ارتفاع */
  }

  &:hover{
    h1{
      height: 90%;
    }
  }
`


export default CartsMainPage;