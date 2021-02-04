import './navbaruserandcart.styles.scss'
import cart from '../../Assets/NavbarUserAndCart/cart.svg'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const NavbarUserAndCart = () => {
    return (
        <div className='navbar-user-and-cart'>
            <span className='cart'><img className='cart-icon' src={cart}/><span className='cart-item-count'>0</span></span>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps, null)(withRouter(NavbarUserAndCart));