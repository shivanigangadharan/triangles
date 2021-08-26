import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
box-shadow: 1px 1px 3px 1px lightgrey;
    display: flex;
`
const Brand = styled.h1`

`
const Links = styled.div`
float: right;
`

function Navbar() {
    return (
        <Main>
            <Brand>
                Triangle
            </Brand>
            <Links>
                <Link to="/hypotenuse"> Hypotenuse </Link>
                <Link to="/"> Quiz </Link>
                <Link to="/area"> Area </Link>
                <Link to="/angles"> Angles </Link>


            </Links>
        </Main>
    );
}

export default Navbar;
