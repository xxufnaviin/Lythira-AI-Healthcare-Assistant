import React from 'react'

const BodyContainer = (props) => {
  return (
    <>
        <div className='container' style={{backgroundColor: props.color, height:props.height, display:props.display, boxShadow: props.border}}>
          {props.children}
        </div>

    </>
  )
}

export default BodyContainer