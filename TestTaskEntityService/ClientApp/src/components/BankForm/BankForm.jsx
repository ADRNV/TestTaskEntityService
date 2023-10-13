import React, { useState } from 'react'
import { Label } from 'reactstrap'
import Form from 'react-bootstrap/Form'
import '../CommonStyles/FormStyles.css'
import '../Validation/ValidationUtils'
import './BankForm.css'
import BICInput from '../BICInput/BICInput'
import CheckInput from '../CheckInput/CheckInput'
import ValidationUtils from '../Validation/ValidationUtils'
import { Button } from 'react-bootstrap'

export default function BankForm({props, banksProps, setBanksProps}) {

    var [bankProp, setBankProp] = useState({})

    var [isValid, setIsValid] = useState(false)

  return (
    <div className='BankForm'>
        <Label className='Form--header'>Банковские реквизиты</Label>
        <div className='BankForm--container'>
            <div className='BankForm--row'>
                <Form.Group>
                    <BICInput bankProp={bankProp} setBankProp={setBankProp}/>
                    <br/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Название филиала банка*</Form.Label>
                    <Form.Control size="lg" className='large-input' type="text" value={bankProp.name} placeholder="ПАО РНКБ" onChange={(e) => {
                        setBankProp({...bankProp, name:e.target.value})
                        }}/>
                    <br/>
                </Form.Group>
            </div>
            <div className='BankForm--row'>
                <Form.Group>
                    <Form.Label>Расчетный счет</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
                        setBankProp({...bankProp, settlementCheck:e.target.value})
                        }}/>
                        <br/>
                </Form.Group>
                <Form.Group>
                    <CheckInput bankProp={bankProp} setBankProp={setBankProp}/>
                    <br/>
                </Form.Group>
            </div>
            <Button onClick={() => setBanksProps([...banksProps, bankProp])}>Сохранить</Button>
        </div>
    </div>
  )
}
