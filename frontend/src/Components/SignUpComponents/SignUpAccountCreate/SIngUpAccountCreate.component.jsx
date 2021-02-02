import { useState } from 'react'
import { withRouter } from 'react-router-dom'

import './signupaccountcreate.styles.scss'
import FormInput from '../../FormInput/FormInput.component'
import CustomButton from '../../CustomButton/CustomButton.component'

const SignUpAccountCreate = ({history}) => {

    const [nick, setNick] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFieldChange = event => {
        const targetName = event.target.name
        if(targetName === 'username') {
            setUserName(event.target.value)
        }else if(targetName === 'nickname') {
            setNick(event.target.value)
        }else if(targetName === 'email') {
            setEmail(event.target.value)
        } else if(targetName === 'password') {
            setPassword(event.target.value)
        }
    }

    const submitRegister = async (e) => {
        e.preventDefault()
        const userArray = [{
            nick,
            userName,
            email,
            password
        }]
        try {
            const response = await fetch("http://localhost:3001/registerNewUser",{
                method: 'POST', 
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(userArray)
            })
            const data = await response.text();
            console.log(data)
        } catch(err) {
            console.error('New user register error', err)
        } finally {
            setNick('')
            setUserName('')
            setPassword('')
            setEmail('')
        }
    }

    return (
        <form className='signup-account-create-form' onSubmit={submitRegister}>
            <h2>Create an account</h2>
            <FormInput name='nickname' label='Nick' type='text' onChange={handleFieldChange} value={nick} required/>
            <FormInput name='username' label='Name' type='text' onChange={handleFieldChange} value={userName} required/>
            <FormInput name='email' label='E-mail' type='email' onChange={handleFieldChange} value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
            <FormInput name='password' label='Password' type='password' onChange={handleFieldChange} value={password} pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$' required/>
            <CustomButton type='submit' name='Create account'/>
            <span>*All fields are required to register</span>
            <span>*The password must contain at least six characters, one uppercase letter, one number and one special character</span>
            <span>Do you have an account? <span onClick={() => history.push('/login')}>Sign In</span></span>
        </form>
        
    )
}

export default withRouter(SignUpAccountCreate);