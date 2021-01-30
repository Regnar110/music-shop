import './navbar.styles.scss'

import { useEffect } from 'react'
import {withRouter} from 'react-router-dom'

import ShopLogo from '../../Assets/ShopLogo.svg'

const Navbar = ({history}) => {

    const handleLogoChange = () => {
        let position = document.querySelector('body').getBoundingClientRect();
        const navLogo = document.querySelector('.nav-logo')
        position.y < -1 ?
            navLogo.style.width='100px'
        :
            navLogo.style.width='150px'
    }

    useEffect(() => {
        window.addEventListener('scroll', handleLogoChange);
        return () => {
            window.removeEventListener('scroll', handleLogoChange)
        }
    })

    return(
        <nav className='navbar'>
            <img className='nav-logo' alt='wings-logo' src={ShopLogo} />
            <div className='navbar-content'>

                <span onClick={() => history.push('/')}>Home<div className='underline'/></span>
                <span onClick={() => history.push('/shop')}>Shop<div className='underline'/></span>
                <span onClick={() => history.push('/contact')}>Contact<div className='underline'/></span>
                |
                <span onClick={() => history.push('/signup')}>Sign in<div className='underline'/></span>
                <span onClick={() => history.push('/login')}>Login<div className='underline'/></span>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)