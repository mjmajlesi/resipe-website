import React, { useEffect, useState } from 'react'
import { getPopuler } from '../api';
import Carts from './Carts';

export interface Irecipes {
    title : string ,
    dishTypes : "lunch" | "soap" | "main course" | 'main dish' | "dinner" ,
    id : number ,
    image : string ,
    vegan : boolean ,
    veryPopuler : boolean ,
}
function Populer() {

    const [Populer, setPopuler] = useState<Irecipes[]>([]);
    useEffect(() => {
        getPopuler().then(res => 
            setPopuler(res.recipes)
        )
    }, [])

    return (
        <div className='flex flex-wrap gap-8'>
            {
                Populer.map(recipe => (
                    <Carts key={recipe.id} {...recipe} />
                ) )
            }
        </div>
    )
}

export default Populer