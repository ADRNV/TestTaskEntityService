import React, { useState } from 'react'
import { Label } from 'reactstrap'
import Form from 'react-bootstrap/Form'
import '../CommonStyles/FormStyles.css'
import '../Validation/ValidationUtils'
import './BankForm.css'

export default function BankForm() {

    var [bankProps, setBankProps] = useState({})

  return (
    <div className='BankForm'>
        <Label className='Form--header'>Банковские реквизиты</Label>
        <div className='BankForm--container'>
            <div className='BankForm--row'>
                <Form.Group>
                    <Form.Label>БИК*</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
                        setBankProps({...bankProps, biс:e.target.value, name:localStorage.getItem(e.target.value)})
                        }}/>
                        <br/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Название филиала банка*</Form.Label>
                    <Form.Control size="lg" className='large-input' type="text" value={bankProps.name} placeholder="ПАО РНКБ" onChange={(e) => {
                        setBankProps({...bankProps, name:e.target.value})
                        }}/>
                        <br/>
                </Form.Group>
            </div>
            <div className='BankForm--row'>
                <Form.Group>
                    <Form.Label>Расчетный счет</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
                        setBankProps({...bankProps, settlementCheck :e.target.value, name:localStorage.getItem(e.target.value)})
                        }}/>
                        <br/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Корреспонденский счет*</Form.Label>
                    <Form.Control size="lg" type="text" value={bankProps.name} placeholder="ПАО РНКБ" onChange={(e) => {
                        setBankProps({...bankProps, correspondentCheck :e.target.value})
                        }}/>
                        <br/>
                </Form.Group>
            </div>
        </div>
    </div>
  )
}
