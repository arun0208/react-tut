import React from 'react'
import './FormInput.css'
const FormInput = (props) => {
  return (
    <div className='formInput'>
        <label>{props.label}</label>
        <input placeholder={props.placeholder} onChange={(e)=>{props.setData(e.target.value)}}/>
    </div>
  )
}

export default FormInput