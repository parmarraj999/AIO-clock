import React, {useState,useEffect } from 'react'
import './timer.css'

function Timer() {

  const [days ,setDays] = useState(0);
  const [hour ,setHours] = useState(0); 
  const [minutes ,setMinutes] = useState(0);
  const [seconds ,setSeconds] = useState(0);

  const [value ,setValue] = useState('');
  const [dead, setDead] = useState(value);

  const deadline = `"${dead}"`

  const getTime= () =>{
    const time = Date.parse(deadline)-Date.now()
    setDays(Math.floor(time/(1000*60*60*24)))
    setHours(Math.floor(time/(1000*60*60)%24))
    setMinutes(Math.floor(time/(1000*60)%60))
    setSeconds(Math.floor(time/(1000)%60))
  }

  useEffect(()=>{
    const interval = setInterval(()=> getTime(deadline),1000)
    return () => {clearInterval(interval)}
  },[getTime  ])

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const handleClick = () => {
    setDead(value);  
  }

  return (
    <div className='timerContainer'>
      <div className='input_container'>
        <input type='text' onChange={handleChange} className='timer_input' placeholder='monthName_date_year'/>
        <button onClick={handleClick}>Set</button>
      </div>
      <div className='countdown_container'>
        <div className='box'>
          <h1 className="timerCount">{days<=9 ? "0"+days : days}</h1>
          <span className='timerCountLabel'>Days</span>
        </div>
        <div className='box'>
          <h1 className="timerCount">{hour<=9 ? "0" + hour : hour}</h1>
          <span className='timerCountLabel'>hour</span>
        </div>
        <div className='box'>
          <h1 className="timerCount">{minutes<=9 ? "0"+minutes : minutes}</h1>
          <span className='timerCountLabel'>minutes</span>
        </div>
        <div className='box'>
          <h1 className="timerCount">{seconds<=9 ? "0"+seconds : seconds}</h1>
          <span className='timerCountLabel'>seconds</span>
        </div>
      </div>
    </div>
  )
}


export default Timer;