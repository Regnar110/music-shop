import './signupinformation.styles.scss'
import CustomButton from '../../CustomButton/CustomButton.component'
import { withRouter } from 'react-router-dom'


import fastorder from '../../../Assets/signupinformation/fastorder.svg'
import prevorder from '../../../Assets/signupinformation/previousorder.svg'
import trackorder from '../../../Assets/signupinformation/trackorder.svg'
import discount from '../../../Assets/signupinformation/discount.svg'

const SignUpInformation = ({login, history}) => {
    return (
        <div className='signup-information'>
            {
                login ? 
                (   
                    <>
                    <h2>You do not have an account?</h2>
                    <CustomButton name='Create an account' onClick={() => history.push('/signup')}/>
                    </>
                )
                :
                (
                    null
                )
            }

            <h2>Why is it worth having an account?</h2>
            <div className='signup-information-content'>
                <div className='information'>
                    <img alt='fastorder' src={fastorder}/>
                    <span>Order faster</span>  
                </div>
                <div className='information'>
                    <img alt='prevorder' src={prevorder}/>
                    <span>Check previous orders</span>
                </div>
                <div className='information'>
                    <img alt='track order' src={trackorder}/>
                    <span>Track your orders</span>
                </div>
                <div className='information'>
                    <img alt='discount' src={discount}/>
                    <span>Take advantage of discounts and promotions</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SignUpInformation);