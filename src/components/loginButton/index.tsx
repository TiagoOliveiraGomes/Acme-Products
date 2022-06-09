import React from 'react'
import "./styles.css"

import { UserCircle } from 'phosphor-react'

export function LoginButton() {
  return (
    <div className='Container-LoginButton'>
        <UserCircle size={32} color={"#fff"} /> Login
    </div>
  )
}
