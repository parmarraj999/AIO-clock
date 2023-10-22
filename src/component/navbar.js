import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function navbar() {
  return (
    <NavContainer>
      <Link className='link' to="/clock">Clock</Link>
      <Link className='link' to="/stopwatch">Stopwatch</Link>
      <Link className='link' to="/timer">timer</Link>
    </NavContainer>
  )
}

export default navbar

const NavContainer = styled.div`
    width: 30%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    position: absolute;
    background:#091921;
    box-shadow: 0px 8px 10px rgba(0,0,0,0.3), inset 15px 15px 15px rgba(0,0,0,0.4);
    border-radius: 15px;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%,0);
    padding: 0 1.8rem;
    .link{
      text-decoration: none;
      font-size: 24px;
      color: grey;
      font-weight: 500;
      transition: .3s all;
      user-select: none;
    }
    .link:hover{
      color: #ff105a;
    }
    @media screen and (max-width:756px) {
      width: 85%;
    }
`
