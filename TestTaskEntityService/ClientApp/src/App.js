import React, {useEffect } from 'react';
import PropertyForm from './components/PropertyForm/PropertyForm';
import BankForm from './components/BankForm/BankForm';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import BanksList from './components/BanksList/BanksList';
import EntityClient from './Services/EntityFaceClient'
import { useFetchHook } from './hooks/useFetching'
import { Button } from 'react-bootstrap';

export default function App(){
  
    var [entity, setEntity] = useState({id:"3fa85f64-5717-4562-b3fc-2c963f66afa6", activityType:"sp"})

    var [banksProps, setBanksProps] = useState([])

    var [files, setFiles] = useState([])

    var [createEntity, loading, error] = useFetchHook(async () => {
        console.log(entity)
        await EntityClient.createEntity(entity)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })

    var [upload, loading, error] = useFetchHook(async () => {
        console.log(entity)
        await EntityClient.uploadDocs(files, entity.fullName)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route key="propertyform" path='/' element={<PropertyForm entity={entity} setEntity={setEntity} files={files} setFiles={setFiles}/>}/>
                <Route key="bankprops" path='/bankprops' element={
                    <div>
                        <BanksList banksProps={banksProps} setBanksProps={setBanksProps}/>
                        <Button onClick={() => {
                            setEntity({...entity, bankProps:[...banksProps]})
                            createEntity()
                            upload()
                        }}>Отправить</Button>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    );
}
