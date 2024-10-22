import React from 'react';
import { Irecipes } from './Populer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Carts({ title, vegan, image, veryPopuler, dishTypes , id }: Irecipes) {
    return (
        <SCarts>
            <Link to={`/recipe/${id}`}>
                <img className='rounded-2xl w-full' src={image} alt={title} />
                <h4 className='line-clamp-1 text-center p-4 '>{title}</h4>
            </Link>
        </SCarts>
    )
}

const SCarts = styled.div`
    overflow: hidden;
    position: relative;
    min-width: 300px;
    gap: 50px;
`