import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import ValidationUtils from '../Validation/ValidationUtils'
import { Label } from 'reactstrap'
import '../CommonStyles/FormStyles.css'

export default function TINInput({entity, setEntity}) {
  
    var [error, setError] = useState(null)

    return (
    <Form.Group className='TINInput'>
        <Form.Label>ИНН*</Form.Label>
        <Form.Control size="sm" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
            var occuredError = {code: 0, message:""}
            if(ValidationUtils.validTIN(e.target.value, occuredError)){
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
