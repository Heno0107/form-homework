import style from './form.module.css'
import { User } from '../user/user'
import { Error } from '../error/error'
import { useState } from 'react'

export function Form () {
    const [name , setName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [repPassword , setRepPassword] = useState('')
    const [showUser , setShowUser] = useState(true)

    function btnLogic () {
        if(name && lastName && email && password && password == repPassword){
            return true
        }else {
            return false
        }
    }

    return(
        <div className={style.form}>
            <div className={style.header}>
                <h1>Create a new account</h1>
                <h3>it's quick and easy</h3>
            </div>

            <div className={style.inputs}>
                <form action="">
                    <input type="text" className={showUser == 'decline' ? style.UserError : style.user} placeholder='Name' value = {name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" className={showUser == 'decline' ? style.UserError : style.user} placeholder='Last Name' value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <input type="email" className={showUser == 'decline' ? style.PassError : style.pass} placeholder='Email' value = {email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" className={showUser == 'decline' ? style.PassError : style.pass} placeholder='Password' value = {password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" className={showUser == 'decline' ? style.PassError : style.pass} placeholder='Repeat Password' value={repPassword} onChange={(e) => setRepPassword(e.target.value)}/>
 
                    <button type='button' onClick={() => {name && lastName && email && password && password == repPassword ? setShowUser('accept') : setShowUser('decline')}}>Sign Up</button>
                    {showUser == 'decline' && <Error />}
                    {showUser == 'accept' && <User userName={name} userLname={lastName} userEmail={email} userPass={password}/>}

                </form>
            </div>

            
        </div>
    )
}

