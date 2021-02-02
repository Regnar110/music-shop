
import './login.styles.scss'
import BreakFromTop from '../../Components/BreakFromTop/BreakFromTop.component'
import SignUpInformation from '../../Components/SignUpComponents/SignUpInformation/SignUpInformation.component'
import LoginForm from '../../Components/LoginComponents/LoginForm/LoginForm.component'

const Login = () => {

    return(
        <div className='login'>
            <BreakFromTop breakHeight={'150px'}/>
            <div className='login-content'>
                <LoginForm />
                <SignUpInformation login={true}/> 
            </div>
        </div>
    )
}

export default Login;