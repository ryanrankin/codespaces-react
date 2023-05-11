import { useState, useEffect } from 'react';


function DateTime({ dateObj = new Date() }) {

    const [date, setDate] = useState(dateObj);
    const [dateString, setDateString] = useState(date.toLocaleDateString())
    const [time, setTime] = useState(date.toLocaleTimeString());
 
    useEffect(() => {
        setInterval(() => {
          setDate(new Date())
        }, 1000)
      })
      
      useEffect(() => {
        const twelveHours = 1000 * 60 * 60 * 12;
        setInterval(() => {
          setDateString(date.toLocalDateString())
        }, twelveHours)
      })
    
      useEffect(() => {
        setTime(date.toLocaleTimeString())
      }, [date])  

    return <small>{dateString}, {time}</small>
}

export { DateTime };