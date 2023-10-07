import React from 'react'
import Form from 'react-bootstrap/Form'
import { Label } from 'reactstrap'
import './LLCForm.css'
import '../CommonStyles/FormStyles.css'
import SPForm from '../SPForm/SPForm'

export default function LLCForm({header}) {
  return (
    <div className='LLCForm'>
        <div className='LLCForm--container'>
            <Label className='Form--header'>{header}</Label>
                <div className='LCCForm--row'>
                    <Form.Group>
                        <Form.Label>Наименование полное*.</Form.Label>
                        <Form.Control className='large-input' type="text" placeholder="ООО Московская промышленная компания"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Наименование сокращение*.</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="ООО МПК"/>
                    </Form.Group>
                   <Form.Group>
                        <Form.Label>Дата регистрации*.</Form.Label>
                        <Form.Control size="sm" type="date"/>
                   </Form.Group>
                </div>
                <br/>
                <SPForm></SPForm>
            <div className='SPForm--row'>
            </div>
        </div>
    </div>
  )
}
