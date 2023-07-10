import React from 'react'

export default function Container(props) {
  const { children, width } = props;
  const widthVal = props.width || '80'
  return (
    <div class="container" style={{ 
      width: widthVal + "%",
      margin: "0 auto"  
     }}> 
      {children}
    </div>
  )
}

