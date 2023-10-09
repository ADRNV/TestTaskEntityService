import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import SPForm from '../SPForm/SPForm'
import LLCForm from '../LLCForm/LLCForm'
import Form from 'react-bootstrap/Form'
import { Label } from 'reactstrap'
import '../CommonStyles/FormStyles.css'
import { Button } from 'react-bootstrap'
import EntityClient from '../../Services/EntityFaceClient'
import { useFetchHook } from '../../hooks/useFetching'
import { Link } from 'react-router-dom'

export default function PropertyForm({props}) {
    
    var [property, setProperty] = useState("sp")

    var [entity, setEntity] = useState({ActivityType:property, BIKs:["123"]})

    var [fetching, loading, error] = useFetchHook(async () => {
        console.log(entity)
        await EntityClient.createEntity(entity)
    })

    useEffect(() => {
        fetching()
    }, [])

    function determineProperty(){
        switch (property){
            case "sp":
                return <SPForm header={"Индивидуальный предприниматель(ИП)"} entity={entity} setEntity={setEntity}/>
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
                    <Dropdown.Item href='#/sp' onClick={() => setProperty("sp")}>Индивидуальный предприниматель (ИП)</Dropdown.Item>
                    <Dropdown.Item href='#/llc' onClick={() => setProperty("llc")}>Общество с ограниченной ответсвенностью (ООО)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Form.Group>
            {determineProperty()}
            <Button variant="light" onClick={() => fetching()}><Link to={"bankprops"}>Банковские реквизиты</Link></Button>
        </div>
  )
}
