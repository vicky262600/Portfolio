import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import Typewriter from "typewriter-effect"

const HeroContainer = styled.div`
 display: flex;
 justify-content: center;
 position: relative;
 padding: 80px 30px;
 z-index: 1;

 @media ( max-width: 960px){
  padding: 66px 16px; 
 }

 @media (max-width: 640){
  padding: 32px 16px;
 }

 clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px){
    flex-direction: column;
  }
`
const HeroLeftContainer =styled.div`
  width: 100%;
  order: 1;
  gap: 6px;

  @media (max-width: 960px){
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px){
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const HeroRightContainer = styled.div`
 width: 100%;
 order: 2;
 background-color: blue;

 @media (max-width: 960px){
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

 @media (max-width: 640px){
    margin-bottom: 30px;
  }
`
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({theme})=> theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px){
    text-align: center;
  }
 
  @media (max-width: ){
    font-size: 35px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`
const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`
const ResumeButton = styled.div`
  height: 50px;
  width: 150px;
  border: 1px solid  ${({ theme }) => theme.primary};
  color: ${({theme})=> theme.primary};
  border-radius: 

`

const hero = () => {
  return (
    <div id= "about" >
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br/> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>
              {Bio.description}
            </SubTitle>
            <ResumeButton>
              Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            Right
            {/* <ProfilePicture>
              <ProfilePictureContianer>
              
              </ProfilePictureContianer>
            </ProfilePicture> */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default hero