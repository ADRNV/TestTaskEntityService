import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import ValidationUtils from '../Validation/ValidationUtils'
import { Label } from 'reactstrap'
import '../CommonStyles/FormStyles.css'

export default function BICInput({bankProp, setBankProp}) {
  
    var [error, setError] = useState(null)

    return (
    <Form.Group className='BICInput'>
        <Form.Label>БИК*</Form.Label>
        <Form.Control size="lg" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
            var occuredError = {code: 0, message:""}
            if(ValidationUtils.validatebic(e.target.value, occuredError)){
                setBankProp({...bankProp, bic:e.target.value, name:localStorage.getItem(e.target.value)})
                setError('')
            }else{
                setError(occuredError.message)
            }
            
        }}/>
        <Label className='Input--error'>{error}</Label>
    </Form.Group>
  )
}
