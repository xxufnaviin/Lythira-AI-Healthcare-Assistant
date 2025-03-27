import React, { useState } from 'react'
import BodyContainer from '../components/BodyContainer'
import Footer from "../components/Footer"
import Buttons from '../components/Buttons'
import Box from "../components/Box"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        
/**Based on the symptoms and health markers, I think the patient might have Diabetes. */
const Predict = () => {

  const [response, setResponse] = useState(false)
  const [startLearn, setLearn] = useState(false)
  const [symptoms, setSymptons] = useState([<div className ='sm-items'>Frequent Urination</div>,
                                            <div className ='sm-items'>Excessive Thirst</div>,
                                            <div className ='sm-items'>Dry Skin</div>])
  const [markers, setMarkers] = useState([<div className ='sm-items'>High Body Mass Index</div>,
                                          <div className ='sm-items'>High LDL </div>,    
                                          <div className ='sm-items'>High C-Reactive Protein</div>,
                                          <div className ='sm-items'>Low Blood Glucose</div>,
                                          <div className ='sm-items'>Low HDL</div>,
                                          <div className ='sm-items'>High Urine Albumin</div>])

  const start = ()=>{
    setLearn(true)    
  }
  const sent = ()=>{
    setResponse(true)
  }
  const chatbot_response = "Correct! These health markers and symptoms indicate diabetes. High BMI, high LDL, low HDL, and high urine albumin contribute to insulin resistance, leading to poor blood sugar control. Managing diet, lifestyle, and medication is key!"
  return (
    <>
    <div className='content'>

      <BodyContainer color="rgb(232, 249, 249)" height="auto">
        <div className = "predict-head">
            <div className = "predict-info">
              <h1 className='page-title'>Predict & Learn 🧠</h1>
              <p className='page-info'>Try to predict the outcome and learn from it!! </p>
            </div>
            {/* <Buttons text ="Start" marginTop="0px"></Buttons> */}
            <div className = "button-all" style={
                                          {marginTop:"0px",
                                          marginLeft:"auto",
                                          marginRight:"40px"}} onClick={start}>Start </div>
          </div>
        <div className='predict-body'>
          
            <div className ="predict-box" style={{animation:"none"}}>
              <h3 className='box-head' style={{animation:"none"}}>Be your own Doctor 🧑‍⚕️</h3>
              <p className="box-details" style={{animation:"none", marginLeft:"75px"}}>Learn how to self-diagnose and help others based on symptoms and medical markers.  </p>
            </div>
            <div className ="predict-box" style={{animation:"none"}}>
              <h3 className='box-head' style={{animation:"none"}}>Gain Meaningful Insight 🔍</h3>
              <p className="box-details" style={{animation:"none", marginLeft:"40px"}}>See what causes diseases among patients based on data and gain real-time insights!</p>
            </div>
        </div>
        <div className = "predict-game" style ={startLearn? {display:""}:{display:'none'}}>
            <h3 className = "box-head" style = {{marginBottom:"0px", animation:"none"}}>Predict the following:</h3>
            <p className='box-details' style={{marginTop:"0px", marginBottom:"0px", animation:"none"}} >Consider the patient's symptoms and health markers</p>

            <div className = "predict-game-row">
              <div className = "patient-health">
                <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:'auto',marginBottom:"10px"}}>Health Markers</h3>
                 {markers}                             
              </div>
                                            
              <div className = "patient-symptoms">
                <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:'auto',marginBottom:"10px"}}>Symptoms</h3>
                {symptoms}                            
              </div>
              <div className = "predict-input">
                <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:'auto',marginBottom:"10px"}}>Your Prediction</h3>
                <textarea className="predict-user-input" style={{animation:"none"}}/>
                <div className = "button-all" style={
                                          {marginTop:"24px",
                                          marginRight:"200px"}} onClick={sent}>Send </div>
              </div>
              <div className = "predict-response" style={response?{display:""}:{display:"none"}}>
                <h3 className = "box-head" style = {{marginTop:"10px", marginLeft:'auto',marginBottom:"10px"}}>˚✧ Lytheal-AI˚ </h3>
                <textarea className="predict-user-input" placeholder={chatbot_response} disabled="true" style={{animation:"loadLanding 1s ease-in",marginBottom:"0px",width:"300px"}}/>
                <div className = "predict-response-footer">

                  <p className='box-details' style = {{marginLeft:"0px",marginRight:"10px"}}>Here's what our Lytheal-AI has to say! </p>
                  <div className = "button-all" style={{marginLeft:"0px",marginTop:"0px",
                                            height:"40px",
                                            width:"100px",fontSize:"14px",animation:"loadLanding 1s ease-in"}} onClick={sent}>Learn More </div>
                </div>
                
              </div>
            </div>
          
        </div>

        
          </BodyContainer>
      <Footer></Footer>
    </div>

    </>
  )
}

export default Predict