import { useContext, useState } from 'react'
import { FirebaseContext } from '../../../Firebase/firebase'

import './loginform.styles.scss'
import FormInput from '../../FormInput/FormInput.component'
import CustomButton from '../../CustomButton/CustomButton.component'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState('')
    
    const firebase = useContext(FirebaseContext)

      const provider = new firebase.auth.GoogleAuthProvider()

      const googleAuthResultFunction = ({user: {displayName, email, uid}}) => {
        const userObject = {
            uid,
            displayName,
            email
        }
        return userObject;
      }

      const handleGoogleLogin = async () => {
        try {
            const response = await firebase.auth().signInWithPopup(provider);
            const result = await googleAuthResultFunction(response)
            setCurrentUser(result)
            console.log(result)
        } catch(err) {
            console.log(err)
        }
      }

      const submitLogin = async (e) => {
            e.preventDefault();

            const loginUserArray = [
                {
                    email,
                    password
                }
            ]
            try{
                const response = await fetch('http://localhost:3001/userLogin', {
                    method: 'POST', 
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginUserArray)
                })
                const data = await response.text();
                console.log(data)
            } catch(err) {
                console.error('failed to login', err)
            } finally {
                setEmail('')
                setPassword('')
            }
        } 

    const handleFieldChange = event => {
        const targetName = event.target.name
        if(targetName === 'email') {
            setEmail(event.target.value)
        } else if(targetName === 'password') {
            setPassword(event.target.value)
        }
    }

    return (
        <form className='login-form' onSubmit={submitLogin}> 
            <h2>Login</h2>
            <FormInput name='email' label='E-mail' type='email' onChange={handleFieldChange} value={email} required/>
            <FormInput name='password' label='Password' type='password' onChange={handleFieldChange} value={password} required/>
            <div className='buttons'>
                <CustomButton type='submit' name={'Login'} google={false}/>
                <CustomButton name={'Login'} google={true} onClick={handleGoogleLogin}/> 
            </div>
        </form>
    )
}

export default LoginForm;