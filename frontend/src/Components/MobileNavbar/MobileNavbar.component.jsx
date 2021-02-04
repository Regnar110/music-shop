import './mobilenavbar.styles.scss'
import ShopLogo from '../../Assets/ShopLogo.svg'
import NavbarUserAndCart from '../NavbarUserAndCart/NavbarUserAndCart.component'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { useState } from 'react'

const MobileNavbar = ({ history, currentUser }) => {

    const [navStatus, setNavStatus] = useState(false)

    const handleMenuOpen = () => {
        setNavStatus(true)
    }

    const handleMenuClose = () => {
        setNavStatus(false)
    }

    return (
        <>
            
            <div className='mobile-site-logo'><img alt='shop logo' src={ShopLogo} /></div>
            <div className='mobile-navbar-button' onClick={handleMenuOpen}>
                <div />
                <div />
                <div />
            </div>
            <nav className={`${navStatus ? 'open' : ''} mobile-navbar`}>
                <div className='close-button' onClick={handleMenuClose}>
                    X
                </div>
                <div className='mobile-navbar-content'>
                    <img alt='wings-logo' src={ShopLogo} />
                    <span onClick={() => {history.push('/'); setNavStatus(false)}}>Home</span>
                    <span onClick={() => {history.push('/shop'); setNavStatus(false)}}>Shop</span>
                    <span onClick={() => {history.push('/contact'); setNavStatus(false)}}>Contact</span>
                    <div className='user-group'>
                        <> 
                        {
                            currentUser ? 
                            <NavbarUserAndCart />
                            :
                            (
                                <>
                                    <span onClick={() => {history.push('/signup'); setNavStatus(false)}}>Sign up</span>
                                    <span>|</span>
                                    <span onClick={() => {history.push('/signin'); setNavStatus(false)}}>Login</span>
                                </>
                            )
                        }
                            

                        </>
                    </div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps, null)(withRouter(MobileNavbar));
