import React from 'react'
import { useNavigate } from 'react-router-dom'

const Box = (props) => {
    const navigate = useNavigate();
    const handleNavClick = (link)=>{
        if(!link){
            setTimeout(()=>{ 
                navigate("/")
            },500)
        }else{
            setTimeout(()=>{ 
                navigate(link)
            },500)
        }
    }
    return (
    <>
        <div className = "box" style={{animation:props.animation,width:props.width}} onClick={()=>{handleNavClick(props.link)}}>
            <h3 className='box-head'  style={{animation:props.animation}}>{props.head}</h3>
            <p className='box-details' style={{animation:props.animation}}>{props.details}</p>
        </div>

    </>
    )
    }

export default Box