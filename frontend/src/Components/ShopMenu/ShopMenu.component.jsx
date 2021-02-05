import './shopmenu.styles.scss'

import { withRouter, useRouteMatch, Link } from 'react-router-dom'

const ShopMenu = ({ history, match, location }) => {
    let { url, path } = useRouteMatch();
    console.log(url)
    return (
        <nav className='shop-side-menu'>
            <div className='shop-menu-item'><Link to={`${url}/recomended`}>Recomended Today</Link></div>
            <div className='shop-menu-item'><Link to={`${url}/top10news`}>Top 10 news</Link></div>
            <div className='shop-menu-item' onClick={() => history.push(`${url}/pre-orders`)}>Pre-orders</div>
            <div className='shop-menu-item'>
                <span>Categories</span>
                <div className='menu-item-dropdown'>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`shop/pop`)}>Pop</span>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`shop/rock`)}>Rock</span>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`shop/hiphop`)}>Hip-Hop/Rap</span>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`shop/electronic`)}>Dance/Electronic</span>
                    <span className='shop-menu-item-dropdown-item' onClick={() => history.push(`shop/classical`)}>Classical/opera</span>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(ShopMenu);