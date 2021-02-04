import { useContext, useState } from 'react'
import { FirebaseContext } from '../../../Firebase/firebase'
import { connect } from 'react-redux'
import setCurrentUser from '../../../redux/user/user.actions'

import './loginform.styles.scss'
import FormInput from '../../FormInput/FormInput.component'
import CustomButton from '../../CustomButton/CustomButton.component'

const LoginForm = ({setCurrentUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    
    const firebase = useContext(FirebaseContext)
      const provider = new firebase.auth.GoogleAuthProvider()
      const googleAuthResultFunction = ({user: {displayName, email}}) => {
        const userObject = {
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

            const loginUserObject = 
                {
                    email,
                    password
                }

            try{
                const response = await fetch('http://localhost:3001/userLogin', {
                    method: 'POST', 
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginUserObject)
                })
                const data = await response.json();
                console.log(data)
                if(data.response) {
                    setLoginError(data.response)
                } else {
                    const {displayName, email} = data
                    setCurrentUser({displayName, email})
                    setLoginError('')
                }
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
            {
                loginError ? 
                <span className='login-error'>*No user with the given data was found. Please check your input.</span>
                :
                null
            }
            <div className='buttons'>
                <CustomButton type='submit' name={'Login'} google={false}/>
                <CustomButton name={'Login'} google={true} onClick={handleGoogleLogin}/> 
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(LoginForm);