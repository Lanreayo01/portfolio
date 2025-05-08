import React from 'react'

function GeneralButton({buttonText, onClick, className, type, backgroundColor }) {
  return (
      <button type={type} onClick={onClick} className={className} style={backgroundColor} >
        {buttonText}  
    </button>
  )
}

export default GeneralButton
