import React from 'react'
import Button from './buttuns'
import Lottie from 'react-lottie';
import animationData from './../animation/Animation.json';
import Container from './container';
import { GoArrowRight } from "react-icons/go";

function Header() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <Container>
            <div className='flex items-center justify-between gap-8 flex-wrap'>
                <div className='flex flex-col items-start justify-center'>
                    <div className='p-4'>
                        <h1 className='font-bold text-[3rem] mb-8 mt-4'>
                            The joy of cooking...
                        </h1>
                        <p className='text-[1rem] mb-8'>
                            More than 100 cooking lessons of different<br /> cuisines from different races 
                            Spend<br />  the experience of cooking differentdishes 
                        </p>
                        <div className='flex items-center gap-4'>
                            <Button variant='login' className='p-3'>
                                Popular
                            </Button>
                            <Button variant='login' className='p-3'>
                                Veggie
                            </Button>
                            <GoArrowRight size={40} />
                        </div>

                    </div>
                </div>
                <div>
                    <Lottie
                        options={defaultOptions}
                        height={350}
                        width={350}
                    />
                </div>
            </div>
        </Container>
    )
}

export default Header