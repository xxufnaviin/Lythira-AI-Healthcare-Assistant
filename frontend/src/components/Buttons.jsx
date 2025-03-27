import React from 'react'

const Buttons = (props) => {
  return (
    <div className="button-all" style={{width:props.width, 
                                        height:props.height, 
                                        marginTop:props.marginTop, 
                                        borderRadius:props.borderRadius}} onClick={props.onClick}>
        {props.text}
    </div>
  )
}

export default Buttons