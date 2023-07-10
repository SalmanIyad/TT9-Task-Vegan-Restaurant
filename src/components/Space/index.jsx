import React from 'react'

export default function Space(props) {
  return (
    <div class= {props.name} style={{ 
      height: props.height+"px",
      backgroundColor: props.backgroundColor || 'transparent',  
     }}> 
    </div>
  )
}
