import React, { useState } from 'react'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Search() {

    const [valueInput , SetValueInput] = useState("");
    const navigate = useNavigate()
    const submitHandler = ()=>{
        navigate(`searched/${valueInput}`)
    }
    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <input onChange={(e)=> SetValueInput(e.target.value)} className='text-gray-700' type="text" placeholder='Search...' value={valueInput} />
                <FaSearch />
            </div>
        </FormStyle>
    )
}


const FormStyle = styled.form`
    div{
        position: relative;
    }
    input{
        border: none;
        background : #d6d7e5;
        border-radius : 1rem ;
        padding: 0.75rem 2.5rem ;
        font-size: 1rem;
        color: white;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100% , -50%);
        color: white;
    }
`

export default Search