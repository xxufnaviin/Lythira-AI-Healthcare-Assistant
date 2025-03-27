import React, { useEffect, useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import Lythira from '../assets/lythira.png'

const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state || false;

    const navigations = {"AI ChatBot": "/chatbot", 
                         "Monitor Health": "/monitor",
                         "Reminders": "/reminder",
                         "Predict & Learn":"/learn",
                         "Sign In": "/signin", 
                         "Register": "/register",
                         "Log Out": "/"}
    const list = ["Reminders","Predict & Learn","Monitor Health","AI ChatBot","Sign In", "Register","Log Out"]
    const [menus, setMenus] = useState([])


    const handleNavClick = (page) =>{
        if(page == "Log Out"){
            setTimeout(()=>{
                navigate(navigations[page] || "/", {state:false})
            }, 500)    
        }else{
        console.log(page)
        setTimeout(()=>{
            navigate(navigations[page] || "/", state?{state:true}:{state:false})
        }, 500)}
    }

    const displayItems = () =>{
       
        setMenus(list.filter(li=> li != "Log Out").map(li => <li className = "items" key={li} onClick={() => {handleNavClick(li)}}>{li}</li>))

    }
    const updateItems = ()=>{
        setMenus(list.filter(li => li != "Sign In" && li != "Register").map(li => <li className = "items" key={li} onClick={() => {handleNavClick(li)}}>{li}</li>))

    }

    useEffect(()=>{
        displayItems()
    },[])

    useEffect(()=>{
        if(state){
            console.log(state)
            console.log("as")
            updateItems();
        }else{displayItems()}
    },[state])

    return (
    <>
    <div className='page'>
        
        
        <div className='navigation'>

            <div className = "home" onClick={()=> {navigate("/",state?{state:true}:{state:false})}}>
                <img className = "logo"  src={Lythira} height={"50px"}/>
                <h1 className='title'>Lythira</h1>
            </div>
            
            <div className= "directory"> 
                {menus}
            </div>

        </div>




            

    </div>

    </>
  )
}

export default NavigationBar
