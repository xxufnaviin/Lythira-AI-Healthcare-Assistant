import React, { useEffect, useState } from 'react'
import BodyContainer from '../components/BodyContainer'
import Footer from "../components/Footer"
import { Dialog } from 'primereact/dialog';
import Buttons from '../components/Buttons';
import Reminders from '../components/Reminders';

                

export const Reminder = () => {

  const [reminder, setReminder] = useState([<Reminders key="preset-1"name="Paracetamol"desc ="Pain reliever for muscle ache" time="09:30"date="Every Day"></Reminders>,
                                            <Reminders key="preset-2"name="Amoxicillin"desc ="Antibiotic for infections" time="14:30"date="Every Day"></Reminders>,
                                            <Reminders key="preset-3"name="Amoxicillin"desc ="Antibiotic for infections" time="20:30"date="Every Day"></Reminders>])
  const [add, setAdd] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [rem, setRem] = useState({name:"", date:"", time:"", desc:""})
  
  const submitData = ()=>{
    setAdd(false)
    setSubmitted(true)
    setTimeout(()=>setSubmitted(false),100)
    // setRem({name:"wqe", date:"rwe", time:"wee", desc:"weew"})
  } 
  const changeName =(event)=>{
    setRem(rem =>({...rem, name:event.target.value}))
  }
  const changeDate =(event)=>{
    setRem(rem =>({...rem, date:event.target.value}))
  }
  const changeTime =(event)=>{
    setRem(rem =>({...rem, time:event.target.value}))
  }
  const changeDesc =(event)=>{
    setRem(rem =>({...rem, desc:event.target.value}))
  }

  const addData = ()=>{
    setReminder(reminder => [...reminder, <Reminders  key={reminder}
                                            name={rem.name} 
                                            desc ={rem.desc} 
                                            time={rem.time} 
                                            date={rem.date}></Reminders>])

  }

  const addReminder = ()=>{
    setAdd(true)
  }

  useEffect(()=>{
    if(submitted){
      addData();
    }
    
  }, [submitted])

  return (
    <>
    <div className='content'>

      <BodyContainer color="rgb(232, 249, 249)">
        <div className= 'reminder-head'>
          <h1 className='page-title'>Reminders 🔔</h1>
          <div className='page-add' title = "Add Reminder" onClick={()=> setAdd(true)}>+</div>
        </div>
        <div className="reminder-body">
          {reminder}
        </div>
        <Dialog header="Add Reminder" visible={add} style={{width: '40vw',
                                                            backgroundColor:'#262f32', 
                                                            height:"fit-content", 
                                                            marginTop:"0", 
                                                            padding:"20px",
                                                            paddingLeft:"40px",
                                                            fontSize:"20px",
                                                            borderRadius:"20px",
                                                            paddingBottom:"60px",
                                                            }} onHide={() => {if (!add) return; setAdd(false); }}>

              <h3 className = 'reminder-titles'>Medication</h3>
              <input className = 'reminder-input' id='1' onChange={changeName}></input>
              <h3 className = 'reminder-titles'>Description</h3>
              <input className = 'reminder-input' id='2'onChange={changeDesc}></input>

              <div className='date-time-submit'>
                <h3 className = 'reminder-titles' style={{width:"230px"}}>Repeat</h3>
                <h3 className = 'reminder-titles' >Time</h3>
              </div>

              <div className='date-time-submit'>
                <input className = 'reminder-input' style ={{width:"300px"}} id='3' onChange={changeDate}></input>
                <input className = 'reminder-input' type= "time" style ={{width:"300px"}} id='4'onChange={changeTime}></input>
                <Buttons text="Submit" marginTop="0" height="46px"  onClick={submitData}></Buttons>
              </div>
              
        </Dialog>
      </BodyContainer>
      <Footer></Footer>
    </div>

    </>
  )
}
