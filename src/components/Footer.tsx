import React from 'react';
import Container from './container';
import telegram from './../image/telegram-3-512.jpg';
import email from './../image/email-14-512.jpg';
import github from './../image/github-9-512.jpg';
import { Link } from 'react-router-dom';;

function Footer() {
    return (
        <Container>
            <div className='flex items-center justify-between mt-20 pt-5 pb-4 border-t-4 border-t-white/10'>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <div className='flex items-center justify-between gap-3'>
                        <a href='https://t.me/Mj_majlesi' target='_blank' rel="noreferrer">
                            <img width={40} src={telegram} alt="telegram" />
                        </a>
                        <a href='mohammadjavadmajlesi313@gmail.com' target='_blank' rel="noreferrer">
                            <img width={40} src={email} alt="email" />
                        </a>
                        <a href='https://github.com/mjmajlesi' target='_blank' rel="noreferrer">
                            <img width={40} src={github} alt="github" />
                        </a>
                    </div>
                    <div>
                        <span className='block text-center'> © 2024 Copyright: Mohammad Javad Majlesi </span>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 pr-5'>
                    <h1 className='text-3xl'>Quick access</h1>
                    <Link to={'/cuisine/Italian'}>Italian</Link>
                    <Link to={'/cuisine/American'}>American</Link>
                    <Link to={'/cuisine/Thai'} >Thai</Link>
                    <Link to={'/cuisine/Japanese'} >Japanese</Link>
                </div>
            </div>
            <div>
            </div>
        </Container>
    )
}

export default Footer