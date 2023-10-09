import React, {useEffect } from 'react';
import PropertyForm from './components/PropertyForm/PropertyForm';
import BankForm from './components/BankForm/BankForm';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function App(){

    useEffect(() => {
        localStorage.setItem("8807548745", "ООО Рать")
        localStorage.setItem("9701078611", "ИП Адрианов")
        localStorage.setItem("7743001840", "ООО Петровская гвардия")
        localStorage.setItem("9709050939", "ООО Моя оборона")
    })
    return (
        <BrowserRouter>
            <Routes>
                <Route key="propertyform" path='/' element={<PropertyForm/>}/>
                <Route key="bankprops" path='/bankprops' element={<BankForm/>}/>
        </Routes>
    </BrowserRouter>
    );
}
