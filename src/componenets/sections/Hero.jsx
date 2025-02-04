import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import Typewriter from 'typewriter-effect'
import HeroBgAnimation from '../HeroBgAnimation'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { headContainerAnimation } from '../../utils/motion'
import { headTextAnimation } from '../../utils/motion'
import StarCanvas from "../canvas/Stars";
import profile from "../../data/IMG_0269.jpeg"

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
const HeroLeftContainer = styled.div`
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
 display: flex;
 align-items: center;
 justify-content: end;
 

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
  color: ${({ theme }) => theme.text_primary};
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
const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  height: 50px;
  width: 95%;
  max-width: 300px;
  border: 1px solid  ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 50px;
  padding: 16px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }

  @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`
const ProfilePictureContianer = styled.div`
  height: 375px;
  width: 375px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  overflow: hidden;

  @media (max-width: 640px) {
        max-width: 290px;
        max-height: 290px; 
    } 
`

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`

const hero = () => {
  return (
    <div id="About" >
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div>
          <HeroInnerContainer {...headContainerAnimation}>
            <HeroLeftContainer>
              <motion.div  {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
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
              </motion.div>
              <SubTitle>
                {Bio.description}
              </SubTitle>
              <ResumeButton href={Bio.resume} target='_blank'>
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <Tilt>
                <ProfilePictureContianer>
                  <ProfilePicture src={profile} alt="Vikas Joshi" />
                </ProfilePictureContianer>
              </Tilt>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default hero