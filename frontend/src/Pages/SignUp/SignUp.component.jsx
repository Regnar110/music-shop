import './signup.styles.scss'
import BreakFromTop from '../../Components/BreakFromTop/BreakFromTop.component'
import SignUpAccountCreate from '../../Components/SignUpComponents/SignUpAccountCreate/SIngUpAccountCreate.component'
import SignUpInformation from '../../Components/SignUpComponents/SignUpInformation/SignUpInformation.component'

const SignUp = () => {
    return (
        <div className='signup'>
            <BreakFromTop breakHeight={'150px'}/>
            <div className='signup-components'>
                <SignUpAccountCreate />
                <SignUpInformation />
            </div>
        </div>
    )
}

export default SignUp