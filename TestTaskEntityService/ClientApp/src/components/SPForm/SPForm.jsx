import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import './SPForm.css'
import '../CommonStyles/FormStyles.css'
import Image from 'react-bootstrap/Image';
import { InputGroup, Label } from 'reactstrap'
import '../Validation/ValidationUtils'

export default function SPForm({header, entity, setEntity}) {

    return (
    <div className='SPForm'>
        <div className='SPForm--container'>
            <Label className='Form--header'>{header}</Label>
            <div className='SPForm--row'>
               <Form.Group>
                    <Form.Label>ИНН*</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="xxxxxxxxxx" onChange={(e) => {
                        setEntity({...entity, tin:e.target.value, fullName:localStorage.getItem(e.target.value)})
                        }}/>
                    <br/>
                    <Label>Дата регистрации</Label>
                    <Form.Control type="date" onChange={(e) => setEntity({...entity, registrationDate:e.target.value})} placeholder='дд.мм.гггг'></Form.Control>
               </Form.Group>
               <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Скан ИНН*</Form.Label>
                    <InputGroup>
                        <Form.Control type="file" />
                        <Image alt='uploadimage' src='uploadicon.png'/>
                    </InputGroup>
                    <br/>
                    <Label>Скан выписки из ЕГРИП(не старше 3 месяцев)*</Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>ОГРНИП*</Form.Label>
                    <Form.Control onChange={(e) => setEntity({...entity, MSRN:e.target.value})} type="text" placeholder="xxxxxxxxxx"/>
                    <br/>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Скан ОГРНИП*</Form.Label>
                    <Form.Control type="file" />
                    <div className='officeOptions--container'>
                        <Form.Group>
                            <Form.Label>Скан договора аренды офиса</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>
                        <Form.Check label="Нет договора" id="disabled-default-checkbox" onChange={(e) => setEntity({...entity, hasOffice:e.target.value})}></Form.Check>
                    </div>
                </Form.Group>
            </div>
        </div>
    </div>
  )
}
