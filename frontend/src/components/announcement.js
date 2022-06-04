import React from 'react'
import styled from 'styled-components'

const AnnounceBar = styled.div`
    height: 30px;
    background-color: pink;
    color: black;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Announcement = () => {
  return (
    <AnnounceBar>Super Sale starting from 25th March</AnnounceBar>
  )
}

export default Announcement