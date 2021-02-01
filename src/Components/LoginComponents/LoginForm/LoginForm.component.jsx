import { useState } from 'react'

import './loginform.styles.scss'
import FormInput from '../../FormInput/FormInput.component'
import CustomButton from '../../CustomButton/CustomButton.component'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFieldChange = event => {
        const targetName = event.target.name
        if(targetName === 'email') {
            setEmail(event.target.value)
        } else if(targetName === password) {
            setPassword(event.target.value)
        }
    }

    return (
        <form className='login-form'> 
            <h2>Login</h2>
            <FormInput name='email' label='E-mail' type='email' onChange={handleFieldChange} value={email} required/>
            <FormInput name='password' label='Password' type='password' onChange={handleFieldChange} value={password} required/>
            <div className='buttons'>
                <CustomButton type='submit' name={'Login'} google={false}/>
                <CustomButton name={'Login'} google={true}/>
            </div>
        </form>
    )
}

export default LoginForm;