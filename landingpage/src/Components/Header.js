import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <Container>Header page</Container>
  )
}

export default Header


const Container = styled.div`
height : 100px;
width : 100%;
background-color: black;
color : white;
display : flex;
justify-content: space-around;
align-items: center;
margin-top: -5px;
` 