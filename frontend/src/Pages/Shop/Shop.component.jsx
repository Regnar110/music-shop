import './shop.styles.scss'
import { withRouter, Switch, Route, useRouteMatch, Link } from 'react-router-dom'

import BreakFromTop from '../../Components/BreakFromTop/BreakFromTop.component'
import ShopMenu from '../../Components/ShopMenu/ShopMenu.component'
import ShopItemsContainer from '../../Components/ShopItemsContainer/ShopItemsContainer.component'

const Shop = () => {

    let { path } = useRouteMatch();

    return (
        <div className='shop'>
            <BreakFromTop breakHeight={'180px'}/>
            <div className='shop-container'>
                <ShopMenu />
                <Switch>
                    <Route exact path={path}>
                        <ShopItemsContainer />
                    </Route>
                    {/* <Route path={`${path}/:shopId`}>
                        <ShopItemsContainer />
                    </Route> */}
                </Switch>
            </div>
        </div>
    )
}

export default withRouter(Shop);