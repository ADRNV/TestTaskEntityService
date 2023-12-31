import React from 'react'
import Form from 'react-bootstrap/Form'
import { Label } from 'reactstrap'
import './LLCForm.css'
import '../CommonStyles/FormStyles.css'
import SPForm from '../SPForm/SPForm'

export default function LLCForm({header, entity, setEntity, files, setFiles}) {
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
                        <Form.Control value={entity.shortName} onChange={(e) => setEntity({...entity, shortName:e.target.value})} size="sm" type="text" placeholder="ООО МПК"/>
                    </Form.Group>
                </div>
                <br/>
                <SPForm entity={entity} setEntity={setEntity} files={files} setFiles={setFiles}></SPForm>
        </div>
    </div>
  )
}
