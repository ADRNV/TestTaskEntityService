import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import ValidationUtils from '../Validation/ValidationUtils'
import { Label } from 'reactstrap'
import '../CommonStyles/FormStyles.css'

export default function MSRNInput({entity, setEntity}) {

    var [error, setError] = useState('')
  return (
    <Form.Group className='MSRNInput'>
        <Form.Label>ОГРНИП*</Form.Label>
        <Form.Control size="sm" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
            var occuredError = {code: 0, message:""}
            if(ValidationUtils.validateMSRN(e.target.value, occuredError)){
                setEntity({...entity, tin:e.target.value, fullName:localStorage.getItem(e.target.value)})
                setError('')
            }else{
                setError(occuredError.message)
            }
            
        }}/>
        <Label className='Input--error'>{error}</Label>
    </Form.Group>
  )
}
