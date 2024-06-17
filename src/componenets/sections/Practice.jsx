import React from 'react'
import {skills} from '../../data/constants'
import styled from 'styled-components'


const Name = styled.div`
  font-size: 45px;
`
const Practice = () => {
  return (
    <div>
      {skills.map(item =>(
        <Name>{item.title}</Name>
      ))}
    </div>
  )
}

export default Practice