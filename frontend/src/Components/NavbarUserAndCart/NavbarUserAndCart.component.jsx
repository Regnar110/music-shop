import './navbaruserandcart.styles.scss'
import { useContext } from 'react'
import cart from '../../Assets/NavbarUserAndCart/cart.svg'
import { connect } from 'react-redux'
import setCurrentUser from '../../redux/user/user.actions'
import { FirebaseContext } from '../../Firebase/firebase'

import { withRouter } from 'react-router-dom'

const NavbarUserAndCart = ({ setCurrentUser }) => {

    const firebase = useContext(FirebaseContext)

    const totalLogOut = () => {
        firebase.auth().signOut(); // wylogowanie z uwierzytelniania firebase(Google)
        setCurrentUser(null); // wylogowanie użytkownika zarejestrowanego
        localStorage.setItem('user', null) // po wylogowaniu użytkownika zarejestrowanego czyścimy storage user
    }

    return (
        <div className='navbar-user-and-cart'>
            <span onClick={totalLogOut}>Sign out</span>
            <span className='cart' ><img alt='cart-icon' className='cart-icon' src={cart}/><span className='cart-item-count'>0</span></span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(withRouter(NavbarUserAndCart));