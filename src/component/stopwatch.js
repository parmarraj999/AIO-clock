import React, { useEffect, useRef, useState } from 'react'
import './stopwatch.css'

function Stopwatch() {

  const [hour,setHour] = useState(0);
  const [minute,setMinute] = useState(0)
  const [second,setSecond] = useState(0)
  const [msecond,setMsecond] = useState(0);
  const id = useRef();

  useEffect(()=>{
    return clearInterval(id.current)
  },[])
  function handleTime(){
    id.current = setInterval(() => {
      setMsecond((prev)=>prev + 1)
    }, 100);
  }

  if(msecond === 10){
    setSecond(second + 1)
    setMsecond(0)
  }
  if(second === 60){
    setMinute(minute + 1)
    setSecond(0)
  }
  if(minute === 60){
    setHour(hour + 1)
    setMinute(0)
  }

  const resetCount = () => {
    setHour(0)
    setMinute(0)
    setSecond(0)
    setMsecond(0)
  }

  return (
    <div className='stopwatchContainer'>
      <div className='countContainer'>
        <div className='digitBox'>
          <h1>{hour<=9 ? "0"+hour : hour}</h1>
        </div>
        <span className='stopWatchComa'>:</span>
        <div className='digitBox'>
          <h1>{minute<=9 ? "0"+minute : minute}</h1>
        </div>
        <span className='stopWatchComa'>:</span>
        <div className='digitBox'>
          <h1>{second<=9 ? "0"+second : second}</h1>
        </div>
        <span className='stopWatchComa'>:</span>
        <div className='digitBox'>
          <h1 className='milisecond'>{msecond <= 9 ? "0"+msecond : msecond}</h1>
        </div>
      </div>
      <div className='btnContainer'>
        <button onClick={()=>handleTime()} className='stopBtn'>Start</button>
        <button onClick={()=>clearInterval(id.current)} className='stopBtn'>Stop</button>
        <button onClick={()=>resetCount()} className='resetBtn'>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
