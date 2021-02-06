import './shopmenu.styles.scss'
import topten from '../../Assets/ShopMobileMenu/topten.svg'
import preorder from '../../Assets/ShopMobileMenu/preorder.svg'
import recomended from '../../Assets/ShopMobileMenu/recomended.svg'
import arrow from '../../Assets/ShopMobileMenu/arrow.svg'

import { withRouter } from 'react-router-dom'

const ShopMenu = ({ history }) => {
    return (
        <nav className='shop-side-menu'>
            <div className='shop-menu-item' onClick={() => history.push(`/shop/recomended`)}><img alt='recomended' src={recomended}/>Recomended Today</div>
            <div className='shop-menu-item' onClick={() => history.push(`/shop/top10news`)}><img alt='top ten' src={topten}/>Top 10 news</div>
            <div className='shop-menu-item' onClick={() => history.push(`/shop/pre-orders`)}><img alt='pre orders' src={preorder}/>Pre-orders</div>
            <div className='shop-menu-item'>
                <span>Categories</span>
                <div className='menu-item-dropdown'>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`/shop/pop`)}><img alt='arrow' src={arrow}/>Pop</span>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`/shop/rock`)}><img alt='arrow' src={arrow}/>Rock</span>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`/shop/hiphop`)}><img alt='arrow' src={arrow}/>Hip-Hop/Rap</span>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`/shop/electronic`)}><img alt='arrow' src={arrow}/>Dance/Electronic</span>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`/shop/classical`)}><img alt='arrow' src={arrow}/>Classical/opera</span>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(ShopMenu);