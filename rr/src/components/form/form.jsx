import style from './form.module.css'
import { User } from '../user/user'
import { useState } from 'react'

export function Form () {
    const [name , setName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [repPassword , setRepPassword] = useState('')

    return(
        <div className={style.form}>
            <div className={style.header}>
                <h1>Create a new account</h1>
                <h3>it's quick and easy</h3>
            </div>

            <div className={style.inputs}>
                <form action="">
                    <input type="text" className={style.user} placeholder='Name' value = {name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" className={style.user} placeholder='Last Name' value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <input type="email" className={style.pass} placeholder='Email' value = {email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" className={style.pass} placeholder='Password' value = {password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" className={style.pass} placeholder='Repeat Password' value={repPassword} onChange={(e) => setRepPassword(e.target.value)}/>

                    <button type='button'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}