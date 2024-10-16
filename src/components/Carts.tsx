import React from 'react'
import { Irecipes } from './Populer'

function Carts({title , vegan , image , veryPopuler , dishTypes}:Irecipes) {
  return (
    <div className='w-72 flex flex-col items-center gap-5 p-3 bg-slate-200'>
        <img className='rounded-md' src={image} alt={title} />
        <h1 className='font-semibold line-clamp-2 text-sm'>{title}</h1>
    </div>
  )
}

export default Carts