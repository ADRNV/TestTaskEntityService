import React, {useEffect } from 'react';
import PropertyForm from './components/PropertyForm/PropertyForm';
import BankForm from './components/BankForm/BankForm';

export default function App(){

    useEffect(() => {
        localStorage.setItem("8807548741", "ООО Рать")
        localStorage.setItem("1001344155", "ИП Адрианов")
        localStorage.setItem("7707548716", "ИП Адрианов")
        localStorage.setItem("66607548751", "ИП Адрианов")
    })
    return (
        <div>
            <PropertyForm></PropertyForm>
            <BankForm></BankForm>
        </div>
        
     );
}
