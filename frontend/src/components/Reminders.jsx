import React from 'react'
import Buttons from './Buttons'

const Reminders = (props) => {
  return (
    <>
        {props.name && <div className = "reminder-items">
            <h2 className= "reminder-details">{props.time}</h2>
            <p className= "reminder-details"> {props.date}</p>
            <h4 className= "reminder-details">{props.name}</h4>
            <p className= "reminder-details-desc">{props.desc}</p>
            <div className='button-group'>
                <div className = 'reminder-button' >Edit</div>
            </div>
        </div>}
    
    </>
  )
}

export default Reminders