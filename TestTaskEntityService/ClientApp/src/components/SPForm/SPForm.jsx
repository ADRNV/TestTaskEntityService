import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import './SPForm.css'
import '../CommonStyles/FormStyles.css'
import Image from 'react-bootstrap/Image';
import { InputGroup, Label } from 'reactstrap'
import '../Validation/ValidationUtils'
import TINInput from '../TINInput/TINInput';
import MSRNInput from '../MSRNInput/MSRNInput';
import FileInput from '../FileInput/FileInput';

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
                        <Form.Control type="file" onChange={(e) => setFiles([...files, e.target.files[0]])}/>
                        <Image alt='uploadimage' src='uploadicon.png'/>
                    </InputGroup>
                    <br/>
                    <Label>Скан выписки из ЕГРИП(не старше 3 месяцев)*</Label>
                    <Form.Control type="file" onChange={(e) => setFiles([...files, e.target.files[0]])}/>
                </Form.Group>
                    <MSRNInput entity={entity} setEntity={setEntity}/>
                    <br/>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Скан ОГРНИП*</Form.Label>
                    <Form.Control type='file' onChange={(e) => setFiles([...files, e.target.files[0]])}/>
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
