import React from 'react'
import Form from 'react-bootstrap/Form'
import { Label } from 'reactstrap'
import './LLCForm.css'
import '../CommonStyles/FormStyles.css'
import SPForm from '../SPForm/SPForm'

export default function LLCForm({header, entity, setEntity}) {
  return (
    <div className='LLCForm'>
        <div className='LLCForm--container'>
            <Label className='Form--header'>{header}</Label>
                <div className='LCCForm--row'>
                    <Form.Group>
                        <Form.Label>Наименование полное*.</Form.Label>
                        <Form.Control className='large-input' value={entity.fullName} onChange={(e) => {
                            setEntity({...entity, fullName:e.target.value})
                            }} type="text" placeholder="ООО Московская промышленная компания"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Наименование сокращение*.</Form.Label>
                        <Form.Control onChange={(e) => setEntity({...entity, shortName:e.target.value})} size="sm" type="text" placeholder="ООО МПК"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Дата регистрации*.</Form.Label>
                        <Form.Control onChange={(e) => setEntity({...entity, registrationDate:e.target.value})} size="sm" type="date"/>
                   </Form.Group>
                </div>
                <br/>
                <SPForm entity={entity} setEntity={setEntity}></SPForm>
            <div className='SPForm--row'>
            </div>
        </div>
    </div>
  )
}
