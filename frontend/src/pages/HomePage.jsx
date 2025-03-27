import React, { useEffect, useState, useRef } from 'react'
import BodyContainer from '../components/BodyContainer'
import Footer from "../components/Footer"
import Box from "../components/Box"

const HomePage = () => {
  const ref = useRef(null);
  const [state, setState] = useState(false);


  const handleTry = (event)=> {
    event.target.style.backgroundColor = "rgb(1, 26, 24)";
    event.target.style.color = " rgb(105, 170, 166)";
  }
  const handleMouseClick = ()=> {
    document.getElementById("1").style.animationPlayState = "running"
    document.getElementById("1").style.display = 'flex'
    setTimeout(()=>{document.getElementById("1").style.animationPlayState = "paused"},1000)
    
  }
  const handleScroll = ()=>{
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    console.log(ref)
  }
 


  return (
    <>        
        <div className = "content">
        <BodyContainer color = "rgb(232, 249, 249)">            
          <h1 className= "landing-title">Lythira ⚕</h1>
          <h2 className = "landing-summary">Your AI-Powered Healthcare Assistant</h2>
          <h4 className='landing-desc'>Meet Lythira—your AI healthcare assistant! Get health insights,<br></br>medication reminders, disease predictions, and learn through interactive medical games.<br></br>Stay informed, stay healthy!</h4>  
          <div className="landing-button" onClick={()=>{handleMouseClick();handleScroll()}} >Try Lythira now !</div>
          <div className='line' style ={{transform: "rotate(15deg) translate(-15%, 5000%)"}}/>
          <div className='line' style ={{transform: "rotate(15deg) translate(15%, -15000%)"}}/>
        </BodyContainer>
        <div ref = {ref} id = "1" className = "container-details" style = {{height:"250px", display:"none"}}>
          <Box head= "Monitor Health 🩺" details = " Enter symptoms to get AI-powered predictions about possible health conditions." link ="/monitor"></Box>
          <Box head="AI Chatbot 🤖" details ="Chat with Lytheal-AI to get instant health advice and answers to medical questions."link ="/chatbot"></Box>
          <Box head="Reminders  🔔" details= "Set and manage reminders for medications, check-ups, and health tasks." link = "/reminder"></Box>
          <Box head="Predict & Learn  🧠" details="Predict patient outcomes and understand medical terms to gain deeper insights into self-diagnoses."link = "/learn"></Box>
        </div>
        <Footer ></Footer>
        
        {/* {false && <BodyContainer><p></p></BodyContainer>} */}
        {/* <BodyContainer></BodyContainer> */}
        </div>
        
    </>
    
  )
}

export default HomePage