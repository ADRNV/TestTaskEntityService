import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import SPForm from '../SPForm/SPForm'
import LLCForm from '../LLCForm/LLCForm'
import Form from 'react-bootstrap/Form'
import { Label } from 'reactstrap'
import '../CommonStyles/FormStyles.css'

export default function PropertyForm({props}) {
    
    var [property, setProperty] = useState("sp")

    function determineProperty(){
        switch (property){
            case "sp":
                return <SPForm header={"Индивидуальный предприниматель(ИП)"}/>
            case 'llc':
                return <LLCForm header={"Общество с ограниченой ответсвенностью (ООО)"}></LLCForm>
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
                    <Dropdown.Item href='#/sp' onClick={() => setProperty("sp")}>Индивидуальный предприниматель (ИП)</Dropdown.Item>
                    <Dropdown.Item href='#/llc' onClick={() => setProperty("llc")}>Общество с ограниченной ответсвенностью (ООО)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Form.Group>
            
            {determineProperty()}
        </div>
  )
}
