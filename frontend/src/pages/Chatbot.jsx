import React, { useEffect, useRef, useState } from 'react'
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';

const Chatbot = () => {

  const handleOnChange =(event)=>{
    // console.log(event.target.value)
    setText(event.target.value)
    

  }
  const handleOnClick = ()=>{    
    setConversations(conversations => [...conversations,<div className='user-text'>{text}</div>])
    setText("")
    setTimeout(()=>{setConversations(conversations => [...conversations,<div className='ai-text'>{AI_Response}</div>])},1000)

  }


  const chatRef = useRef(null)
  const [text, setText] = useState("");
  const [loggedIn, setLoggedIn] = useState(false)
  const [conversations, setConversations] = useState([])
  const AI_Response = "Hello! I am Lytheal-AI, your intelligent healthcare assistant! I’m here to help you track your health, analyze symptoms, and provide insights using AI-driven predictions. Whether you need to monitor your health markers, get reminders for your medication, or learn about potential conditions based on your symptoms, I’ve got you covered.Let’s take a step towards smarter, data-driven healthcare—how can I assist you today?"
  
  useEffect(()=>{
    chatRef.current.scrollTo({top: chatRef.current.scrollHeight,behavior: "smooth",})
  }, [conversations])
  

  return (
    <>
    <div className="chatbot">
      <div className='chatbot-history'> 
        <h2 className="chatbot-name">˚✧ Lytheal-AI˚ 🤖</h2>
        {loggedIn?<></>:<h1 className='history-info'>ⓘ</h1>}
        {loggedIn?<></>:<h3 className = "history-text-guest">Sign In to save chat history</h3>}
        <Buttons text="Sign In"></Buttons>
      </div>
      
      <div className='chatbox'>

        <div className='chatbot-window' ref={chatRef}>
          {/* {conversations.map(c => <div className='textbox'>{c}</div>)} */}
          {conversations}

        </div>
        <div className='chatbot-footer'>
          <input className='chatbot-input' value={text} type='input' onChange={handleOnChange}/>
          <Buttons marginTop="auto" width="" height="56px" text="Send" borderRadius="10px" onClick={handleOnClick}></Buttons>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </> 
  )
}

export default Chatbot