import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import SPForm from '../SPForm/SPForm'
import LLCForm from '../LLCForm/LLCForm'
import Form from 'react-bootstrap/Form'
import { Label } from 'reactstrap'
import '../CommonStyles/FormStyles.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PropertyForm({props, entity, setEntity, files, setFiles}) {
    
    function determineProperty(){
        switch (entity.activityType){
            case "sp":
                return <SPForm header={"Индивидуальный предприниматель(ИП)"} entity={entity} setEntity={setEntity} files={files} setFiles={setFiles}/>
            case 'llc':
                return <LLCForm header={"Общество с ограниченой ответсвенностью (ООО)"} entity={entity} setEntity={setEntity}></LLCForm>
        }
            
    }

    return (
        <div className='PropertyForm'>
            <Label className='Form--header'>Форма собственности</Label>
            <Form.Group>
                <Form.Label>Вид деятельности</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Выберете вид деятельности
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setEntity({...entity, activityType:"sp"})}>Индивидуальный предприниматель (ИП)</Dropdown.Item>
                    <Dropdown.Item onClick={() => setEntity({...entity, activityType:"llc"})}>Общество с ограниченной ответсвенностью (ООО)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Form.Group>
            {determineProperty()}
            <Button variant="light"><Link to={"bankprops"}>Банковские реквизиты</Link></Button>
        </div>
  )
}
