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
                <input onChange={(e)=> SetValueInput(e.target.value)} type="text" placeholder='Search...' value={valueInput} />
                <FaSearch />
            </div>
        </FormStyle>
    )
}


const FormStyle = styled.form`
    margin: 0rem 20rem;
    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background : linear-gradient(35deg , #494949 , #313131);
        border-radius : 1rem ;
        padding: 1rem 3rem ;
        font-size: 1rem;
        color: white;
        width: 100%;
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