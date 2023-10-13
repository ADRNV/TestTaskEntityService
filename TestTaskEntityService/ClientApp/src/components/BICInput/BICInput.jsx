import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import ValidationUtils from '../Validation/ValidationUtils'
import { Label } from 'reactstrap'
import '../CommonStyles/FormStyles.css'
import DaDataClient from '../../Services/DaDataClient'
import { useFetchHook } from '../../hooks/useFetching'

export default function BICInput({bankProp, setBankProp}) {
  
    var [error, setError] = useState(null)

    var [fetching, loading, e] = useFetchHook(() => {
        var result = DaDataClient.getBanlByBIC(bankProp.bic)
        .then(response => response.json())
        .then(result => {
            console.log(result.suggestions[0])
            var bankName = result.suggestions[0].data.name
            var check = result.suggestions[0].data.correspondent_account
            setBankProp({...bankProp, name:bankName.short, correspondentCheck:check})
            console.log(bankName)
            console.log(check)
        })
        .catch(error => console.log("error", error.message))
    })

    return (
    <Form.Group className='BICInput'>
        <Form.Label>БИК*</Form.Label>
        <Form.Control size="lg" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
            var occuredError = {code: 0, message:""}
            if(ValidationUtils.validatebic(e.target.value, occuredError)){
                setBankProp({...bankProp, bic:e.target.value})
                fetching()
                setError('')
            }else{
                setError(occuredError.message)
            }
            
        }}/>
        <Label className='Input--error'>{error}</Label>
    </Form.Group>
  )
}
