import React, {useEffect } from 'react';
import PropertyForm from './components/PropertyForm/PropertyForm';
import BankForm from './components/BankForm/BankForm';

export default function App(){

    useEffect(() => {
        localStorage.setItem("8807548745", "ООО Рать")
        localStorage.setItem("9701078611", "ИП Адрианов")
        localStorage.setItem("7743001840", "ООО Петровская гвардия")
        localStorage.setItem("9709050939", "ООО Моя оборона")
    })
    return (
        <div>
            <PropertyForm></PropertyForm>
            <BankForm></BankForm>
        </div>
        
     );
}
