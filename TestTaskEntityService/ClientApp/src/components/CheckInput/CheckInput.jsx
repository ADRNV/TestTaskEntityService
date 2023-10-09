import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import ValidationUtils from '../Validation/ValidationUtils'
import { Label } from 'reactstrap'
import '../CommonStyles/FormStyles.css'

export default function CheckInput({bankProp, setBankProp}) {
  
    var [error, setError] = useState(null)

    return (
    <Form.Group className='CheckInput'>
        <Form.Label>Корреспонденский счет*</Form.Label>
        <Form.Control size="lg" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
            var occuredError = {code: 0, message:""}
            if(ValidationUtils.validCorespondCheck(e.target.value, occuredError)){
                setBankProp({...bankProp, correspondentCheck:e.target.value})
                setError('')
            }else{
                setError(occuredError.message)
            }
            
        }}/>
        <Label className='Input--error'>{error}</Label>
    </Form.Group>
  )
}
