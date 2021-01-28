import './navbar.styles.scss'

import {withRouter} from 'react-router-dom'

import ShopLogo from '../../Assets/ShopLogo.svg'

const Navbar = ({history}) => {
    return(
        <nav className='navbar'>
            <img alt='wings-logo' src={ShopLogo} />
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