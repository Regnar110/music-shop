import './shop.styles.scss'
import { withRouter, Switch, Route, useRouteMatch} from 'react-router-dom'

import BreakFromTop from '../../Components/BreakFromTop/BreakFromTop.component'
import ShopMenu from '../../Components/ShopMenu/ShopMenu.component'
import ShopMobileMenu from '../../Components/ShopMobileMenu/ShopMobileMenu.component'
import ShopItemsContainer from '../../Components/ShopItemsContainer/ShopItemsContainer.component'

const Shop = () => {

    let { path } = useRouteMatch();
    const windowWidth = window.innerWidth

    return (
        <div className='shop'>
            <BreakFromTop breakHeight={'180px'}/>
            <div className='shop-container'>
            {
                windowWidth <= 768 ? 
                (
                    <ShopMobileMenu />
                )
                :
                (
                  <ShopMenu />  
                )
            }
                
                <Switch>
                    <Route exact path={path}>
                        <ShopItemsContainer />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default withRouter(Shop);