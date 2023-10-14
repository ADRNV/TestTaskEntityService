import React from 'react'
import BankForm from '../BankForm/BankForm'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import './BanksList.css'

export default function BanksList({banksProps, setBanksProps}) {
 

    return (
        <div>
           <BankForm banksProps={banksProps} setBanksProps={setBanksProps}/>
            {banksProps.map((b,i) => 
               <BankForm key={i} banksProps={banksProps} setBanksProps={setBanksProps}/>)
            }
        </div>
  )
}
