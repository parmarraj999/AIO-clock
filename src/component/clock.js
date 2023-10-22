import React, { useEffect, useState } from 'react'
import './clock.css'

function Clock() {

    const [seconds,setSeconds] = useState();
    const [minute,setMinute] = useState();
    const [hour ,setHour] = useState();


    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds(new Date().getSeconds()*6)
            setMinute(new Date().getMinutes()*6)
            setHour(new Date().getHours()*30)
        })
    })
    

  return (
    <div className='clockContainer'>
      <div className='clock'>
        <div className='hour'>
          <div style={{transform:`rotateZ(${hour}deg`}} className='hr'></div>
        </div>
        <div className='min'>
          <div style={{transform:`rotateZ(${minute}deg`}} className='mn'></div>
        </div>
        <div className='sec'>
          <div style={{transform:`rotateZ(${seconds}deg`}} className='sc'></div>  
        </div>
      </div>
      <div className='promo-box'><a href='https://github.com/parmarraj999/'><span>Harry </span>/ development </a></div>
    </div>
  )
}

export default Clock
