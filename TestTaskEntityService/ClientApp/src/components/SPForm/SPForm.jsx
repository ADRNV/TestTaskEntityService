import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import './SPForm.css'
import '../CommonStyles/FormStyles.css'
import { InputGroup, Label } from 'reactstrap'
import '../Validation/ValidationUtils'
import TINInput from '../TINInput/TINInput';
import MSRNInput from '../MSRNInput/MSRNInput';

export default function SPForm({header, entity, setEntity, files, setFiles}) {
    return (
    <div className='SPForm'>
        <div className='SPForm--container'>
            <Label className='Form--header'>{header}</Label>
            <div className='SPForm--row'>
               <Form.Group>
                    <TINInput entity={entity} setEntity={setEntity}></TINInput>
                    <Label>Дата регистрации</Label>
                    <Form.Control type="date" onChange={(e) => setEntity({...entity, registrationDate:e.target.value})} placeholder='дд.мм.гггг'></Form.Control>
               </Form.Group>
               <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Скан ИНН*</Form.Label>
                    <InputGroup>
                        <Form.Control type="file" accept="image/png, image/jpeg" onChange={(e) => setFiles([...files, e.target.files[0]])}/>
                    </InputGroup>
                    <br/>
                    <Label>Скан выписки из ЕГРИП(не старше 3 месяцев)*</Label>
                    <Form.Control type="file" onChange={(e) => setFiles([...files, e.target.files[0]])}/>
                </Form.Group>
                    <MSRNInput value={entity.msrn} entity={entity} setEntity={setEntity}/>
                    <br/>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Скан ОГРНИП*</Form.Label>
                    <Form.Control type='file' accept="image/png, image/jpeg" onChange={(e) => setFiles([...files, e.target.files[0]])}/>
                    <div className='officeOptions--container'>
                        <Form.Group>
                            <Form.Label>Скан договора аренды офиса</Form.Label>
                            <Form.Control type="file" accept="image/png, image/jpeg"/>
                        </Form.Group>
                        <Form.Check label="Нет договора" id="enabled-default-checkbox" onChange={(e) => {
                                setEntity({...entity, hasOffice:!e.target.value === "on"})                             
                        }}></Form.Check>
                    </div>
                </Form.Group>
            </div>
        </div>
    </div>
  )
}
