import style from './user.module.css'
import { Form } from '../form/form'

export function User ({userName, userLname, userEmail, userPass}) {
    return (
        <div className={style.userBio}>
            <h2>Welcome , {userName} !</h2>
            <p>Name : {userName} {userLname}</p>
            <p>Mail : {userEmail}</p>
        </div>
    )
}