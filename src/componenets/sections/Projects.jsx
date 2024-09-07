import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from '../../data/constants'
import ProjectCard from '../cards/ProjectCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    position: relative;
    z-index: 1;
    align-items: center;
`
const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media(max-width: 960px){
        flex-direction: column;
    }
`
const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media(max-width: 768px){
        margin-top: 12px;
        font-size: 32px;
    }
`
const Desc = styled.div`
    font-size: 18px;
    align-items: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media(max-width: 768px){
        font-size: 16px;
    }
`
const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`;
const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
        active &&
        `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
    width: 1.5px;
    backgound: ${({ theme }) => theme.primary}
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-itmes: center;
    gap: 28px;
    flex-wrap: wrap; 
`

const Projects = () => {
    const [toggle, setToggle] = useState("all");
    return (
        <Container id='Projects'>
            <Wrapper>
                <Title>Projects</Title>
                <Desc style={{
                    marginBottom: "40px",
                    paddingLeft: "18px",
                    paddingRight: "18px",
                }}>I have worked on web applications and data analysis. Explore on your PC for the full experience— mobile responsiveness is just not my favorite part!</Desc>

                <ToggleButtonGroup>
                    <ToggleButton active={toggle === "all"}
                        onClick={() => setToggle("all")}
                    >ALL</ToggleButton>
                    <Divider />
                    <ToggleButton active={toggle === "web app"}
                        onClick={() => setToggle("web app")}
                    >Web App</ToggleButton>
                    <Divider />
                    <ToggleButton active={toggle === "Decentralized app"}
                        onClick={() => setToggle("web app")}
                    >Decentralized app</ToggleButton>
                    <Divider />
                    <ToggleButton active={toggle === "data analysis"}
                        onClick={() => setToggle("data analysis")}
                    >data analysis</ToggleButton>
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === "all" && projects.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                    {projects.filter((item) => item.category === toggle).map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects 