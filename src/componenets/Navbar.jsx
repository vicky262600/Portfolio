import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

// const Nav = styled.div`
// background-color: ${({ theme }) => theme.bg};
// height: 80px;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size: 1rem;
// position: sticky;
// top: 0;
// z-index: 10;
// color: white;
// `
const NavbarContainer = styled.div`
// width: 100%;
// max-width: 1200px;
// padding: 0 24px;
// display: flex;
// align-items: center;
// justify-content: space-between;
// font-size: 1rem;
background-color: ${({ theme }) => theme.bg};
height: 80px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
color: white;
`

const NavLogo = styled(LinkR)`
width: 80%;
padding: 0 6px;
font-weight: 500;
font-size: 18px;
text-decoration: none;
color: inherit;
`

const NavItem = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
`
const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
  color: ${({ theme }) => theme.primary};
}
@media screen and (max-width: 768px){
  display; none;
}
`
const ButtonContainer = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: end;
align-items: center;
padding: 0 6px;
@media screen and (max-width: 768px){
  display; none;
}
`
const GithubButton = styled.a`
 border: 1px solid  ${({ theme }) => theme.primary};
 color: ${({theme})=> theme.primary};
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 padding: 10px 20px;
 border-radius: 0 20px;
 font-size: 16px;
 font-weight: 500; 
 text-decoration: none;
 transition: all 0.6s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`

const Navbar = () => {
  return (
    // <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          Portfolio
        </NavLogo>

        <NavItem>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItem>

        <ButtonContainer>
          <GithubButton>Github Profile</GithubButton>
        </ButtonContainer>

    </NavbarContainer>
    // {/* </Nav> */}
  )
}

export default Navbar