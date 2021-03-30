import React from 'react'
import './Digit.css'

const Digit=(props)=> {
    return (
        
        <div className='Digit mx-3' style={{ borderColor: props.color}}>
        <h1 className="display-2 py-3 text-center"style={{ color: props.color}}>
       
        {props.value < 10 ?`0${props.value}`: props.value}
        
        </h1>
    </div>
       
    )
}

export default Digit;
