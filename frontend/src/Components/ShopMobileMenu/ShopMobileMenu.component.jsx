import './shopmobilemenu.styles.scss'

import topten from '../../Assets/ShopMobileMenu/topten.svg'
import preorder from '../../Assets/ShopMobileMenu/preorder.svg'
import recomended from '../../Assets/ShopMobileMenu/recomended.svg'
import arrow from '../../Assets/ShopMobileMenu/arrow.svg'

import { withRouter } from 'react-router-dom'
import { useState, useRef } from 'react'
import MenuIcon from '../../Assets/ShopMobileMenu/tap.svg'

const ShopMobileMenu = ({ history }) => { 

    const [ mobileMenuStatus, setMobileMenuStatus ] = useState(false)
    let mobileMenuContent = useRef('')

    const handleMobileShopMenuOpenAndClose = () => {
        mobileMenuContent.current = document.querySelector('.mobile-menu-wrapper')
        if(mobileMenuStatus) {
            mobileMenuContent.current.style.height = '0px'
            setMobileMenuStatus(false)
        } else {
            mobileMenuContent.current.style.height = '300px'
            setMobileMenuStatus(true)
        }
    }

    return (
        <nav className='shop-mobile-menu'>
            <div className='categories-button' onClick={handleMobileShopMenuOpenAndClose}>
                <img className='mobile-shop-menu-icon' alt='menu' src={MenuIcon} />
                <span>Categories</span>
            </div>
            <div className='mobile-menu-wrapper'>
                <div className='shop-mobile-menu-content'>
                    <div className='group-categories'>
                        <span onClick={() => {history.push('/shop/recomended'); handleMobileShopMenuOpenAndClose();}}><img alt='recomended' src={recomended}/>Recomended</span>
                        <span onClick={() => {history.push('/shop/top10'); handleMobileShopMenuOpenAndClose();}}><img alt='top ten' src={topten}/>Top 10 news</span>
                        <span onClick={() => {history.push('/shop/pre-orders'); handleMobileShopMenuOpenAndClose();}}><img alt='pre orders' src={preorder}/>Pre-orders</span>
                    </div>
                    <div className='group-categories'>
                        <span onClick={() => {history.push('/shop/pop'); handleMobileShopMenuOpenAndClose();}}><img alt='arrow' className='arrow' src={arrow}/>Pop</span>
                        <span onClick={() => {history.push('/shop/rock'); handleMobileShopMenuOpenAndClose();}}><img alt='arrow' className='arrow' src={arrow}/>Rock</span>
                        <span onClick={() => {history.push('/shop/rap'); handleMobileShopMenuOpenAndClose();}}><img alt='arrow' className='arrow' src={arrow}/>Hip-Hop/Rap</span>
                        <span onClick={() => {history.push('/shop/electronic'); handleMobileShopMenuOpenAndClose();}}><img alt='arrow' className='arrow' src={arrow}/>Dance/Electronic</span>
                        <span onClick={() => {history.push('/shop/classical'); handleMobileShopMenuOpenAndClose();}}><img alt='arrow' className='arrow' src={arrow}/>Classical/Opera</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(ShopMobileMenu)