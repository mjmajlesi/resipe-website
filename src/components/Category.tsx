import React from 'react'
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import Container from './container';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
function Category() {
    return (
        <>
        <Container>
            <div className='flex flex-row my-1'>
                <LinkStyle className={'flex flex-col items-center justify-center rounded-lg '} to={'/cuisine/Italian'}>
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                </LinkStyle>
                <LinkStyle className={'flex flex-col items-center justify-center rounded-lg '}  to={'/cuisine/American'}>
                    <FaHamburger />
                    <h4>American</h4>
                </LinkStyle>
                <LinkStyle className={'flex flex-col items-center justify-center rounded-lg'}  to={'/cuisine/Thai'}>
                    <GiNoodles />
                    <h4>Thai</h4>
                </LinkStyle>
                <LinkStyle className={'flex flex-col items-center justify-center rounded-lg'}  to={'/cuisine/Japanese'}>
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
    margin-right : 0.2rem;
    background: linear-gradient(35deg, #494949 , #313131);
    width: 10rem;
    height: 7rem;
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