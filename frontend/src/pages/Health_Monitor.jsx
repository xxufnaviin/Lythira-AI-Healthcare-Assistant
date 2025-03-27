import React,{ useState} from 'react'
import BodyContainer from '../components/BodyContainer'
import Footer from "../components/Footer"


const Health_Monitor = () => {
  const [symptoms, setSymptons] = useState([<div className ='sm-items'>Excessive Thirst</div>,
                                            <div className ='sm-items'>Dry Skin</div>])
  const [markers, setMarkers] = useState([<div className ='sm-items'>High Body Mass Index</div>,
                                            <div className ='sm-items'>High LDL </div>,    
                                            <div className ='sm-items'>High C-Reactive Protein</div>,
                                            <div className ='sm-items'>Low Blood Glucose</div>,
                                            <div className ='sm-items'>Low HDL</div>,
                                            <div className ='sm-items'>High Urine Albumin</div>])
  const [demographics, setDemo] = useState([<div className ='sm-items'>21 Years Old</div>,
                                            <div className ='sm-items'>175 cm</div>,
                                            <div className ='sm-items'>67 kg</div>])

  const proneTO = [<li className ='monitor-item'>1️⃣ Cardiovascular Disease (CVD)</li>,
    <li className ='monitor-item'>2️⃣ Chronic Kidney Disease (CKD)</li>]       

  const atRisk = [<li className ='monitor-item'>⚠️ Type 2 Diabetes </li>]     
  const preventive = [<li className ='monitor-item'>✅ Maintain a Healthy Diet </li>,
    <li className ='monitor-item'>✅ Regular Exercise</li>,<li className ='monitor-item'>✅ Routine Health Monitoring </li>]  

  return (
    <>
    <div className='content'>

      <BodyContainer color="rgb(232, 249, 249)" height = "auto">
          <div className = "monitor-head">
            <h1 className = "page-title">Monitor Health 🩺</h1>
            <div className = "button-all" style={
                                            {marginTop:"0px",
                                            marginLeft:"auto",
                                            marginRight:"40px"}}>History </div>
            </div>

          <div className ='monitor-body'>
            <div className = "predict-game-row">

              <div className = "patient-health"style={{marginLeft:"40px"}}>
                  <div className = 'monitor-sub-head'>
                    <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:"0px",marginBottom:"10px"}}>Personal Information</h3>
                    <h3 className = "box-head" style = {{marginTop:"5px", animation:"none", marginLeft:'auto',marginBottom:"0px",fontSize:"25px", marginRight:"10px"}}>+</h3>
                  </div>                  
                      {demographics}                             
                </div> 
                        
              <div className = "patient-health"style={{marginLeft:"60px"}}>
                <div className = 'monitor-sub-head'>
                  <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:"0px",marginBottom:"10px"}}>Health Markers</h3>
                  <h3 className = "box-head" style = {{marginTop:"5px", animation:"none", marginLeft:'auto',marginBottom:"0px",fontSize:"25px", marginRight:"10px"}}>+</h3>
                </div>                  
                    {markers}                             
              </div> 

              <div className = "patient-symptoms" style={{marginLeft:"60px"}}>
                <div className = 'monitor-sub-head'>
                  <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:'0px',marginBottom:"10px"}}>Symptoms</h3>
                  <h3 className = "box-head" style = {{marginTop:"5px", animation:"none", marginLeft:'auto',marginBottom:"0px",fontSize:"25px", marginRight:"10px"}}>+</h3>
                </div>         
                {symptoms}                   
              </div>
              <div className = "patient-symptoms" style={{marginLeft:"60px",boxShadow: "0px 0px 20px 3px rgb(202, 232, 230)",width:"360px", border:"3px solid rgb(31, 93, 80)",borderRadius: "10px",marginTop:"20px"}}>
                <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:'20px',marginBottom:"10px"}}>Health Monitor</h3>

                <div className = "patient-symptoms" style={{marginLeft:"0px",borderTop:"6px solid rgb(31, 93, 80)",borderRadius: "5px",overflow:"scroll",scrollbarWidth:"none",maxHeight:"260px"}}>
                  <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:'20px',marginBottom:"10px",fontSize:"16px"}}>Prone To :</h3>
                     {proneTO}       
                  <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:'20px',marginBottom:"10px",fontSize:"16px",color:"red"}}>At Risk :</h3>
                  {atRisk} 
                  <h3 className = "box-head" style = {{marginTop:"10px", animation:"none", marginLeft:'20px',marginBottom:"10px",fontSize:"16px"}}>Preventive Measures :</h3>
                  {preventive}                        
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

export default Health_Monitor