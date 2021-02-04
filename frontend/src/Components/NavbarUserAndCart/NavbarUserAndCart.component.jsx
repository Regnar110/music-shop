import './navbaruserandcart.styles.scss'
import { useContext } from 'react'
import cart from '../../Assets/NavbarUserAndCart/cart.svg'
import { FirebaseContext } from '../../Firebase/firebase'

import { withRouter } from 'react-router-dom'

const NavbarUserAndCart = () => {

    const firebase = useContext(FirebaseContext)

    return (
        <div className='navbar-user-and-cart'>
            <span onClick={() => firebase.auth().signOut()}>Sign out</span>
            <span className='cart' ><img alt='cart-icon' className='cart-icon' src={cart}/><span className='cart-item-count'>0</span></span>
        </div>
    )
}

export default withRouter(NavbarUserAndCart);