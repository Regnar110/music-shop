import './mobilenavbar.styles.scss'
import ShopLogo from '../../Assets/ShopLogo.svg'

import { withRouter } from 'react-router-dom'
import { useState } from 'react'

const MobileNavbar = ({ history }) => {

    const [navStatus, setNavStatus] = useState(false)

    const handleMenuOpen = () => {
        setNavStatus(true)
    }

    const handleMenuClose = () => {
        setNavStatus(false)
    }

    return (
        <>
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
                        <span onClick={() => {history.push('/signup'); setNavStatus(false)}}>Sign up</span>
                        <span>|</span>
                        <span onClick={() => {history.push('/signin'); setNavStatus(false)}}>Login</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter(MobileNavbar);
