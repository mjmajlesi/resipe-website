import React from 'react'
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import Container from './container';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
function Category() {
    const location = useLocation()
    return (
        <>
        {
            location.pathname === "/" && <Header />
        }
        <Container>
            <div className='flex justify-center my-8'>
                <LinkStyle className={'flex flex-col items-center justify-center rounded-lg mr-8'} to={'/cuisine/Italian'}>
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                </LinkStyle>
                <LinkStyle className={'flex flex-col items-center justify-center rounded-lg mr-8'}  to={'/cuisine/American'}>
                    <FaHamburger />
                    <h4>American</h4>
                </LinkStyle>
                <LinkStyle className={'flex flex-col items-center justify-center rounded-lg mr-8'}  to={'/cuisine/Thai'}>
                    <GiNoodles />
                    <h4>Thai</h4>
                </LinkStyle>
                <LinkStyle className={'flex flex-col items-center justify-center rounded-lg mr-8'}  to={'/cuisine/Japanese'}>
                    <GiChopsticks />
                    <h4>Japanese</h4>
                </LinkStyle>
            </div>
        </Container>
    </>
    )
}

const LinkStyle = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    background: linear-gradient(35deg, #494949 , #313131);
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    transform: scale(0.8);//

    h4 {
        color: white;
        font-size: 1rem;
    }

    svg {
        color: white;
        font-size: 2rem;
    }

    &.active {
        background: #1e98d5;
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`

export default Category