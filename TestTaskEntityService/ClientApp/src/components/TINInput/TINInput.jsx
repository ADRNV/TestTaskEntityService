import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import ValidationUtils from '../Validation/ValidationUtils'
import { Label } from 'reactstrap'
import '../CommonStyles/FormStyles.css'
import { useFetchHook } from '../../hooks/useFetching'
import DaDataClient from '../../Services/DaDataClient'

export default function TINInput({entity, setEntity}) {
  
    const [error, setError] = useState(null)

    var [fetching, loading, e] = useFetchHook(() => {
        var result = DaDataClient.getNamesByTIN(entity.tin)
        .then(response => response.json())
        .then(result => {
            console.log(result.suggestions[0])
            var nameInfo = result.suggestions[0].data.name
            setEntity({...entity, fullName:nameInfo.full_with_opf, shortName:nameInfo.short_with_opf})
            console.log(nameInfo)
            return nameInfo 
        })
        .catch(error => console.log("error", error.message))
    })

    return (
    <Form.Group className='TINInput'>
        <Form.Label>ИНН*</Form.Label>
        <Form.Control size="sm" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
            var occuredError = {code: 0, message:""}
            if(ValidationUtils.validTIN(e.target.value, occuredError)){
                setEntity({...entity, tin:e.target.value})
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
