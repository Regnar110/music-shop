import './shop.styles.scss'
import { withRouter } from 'react-router-dom'
import BreakFromTop from '../../Components/BreakFromTop/BreakFromTop.component'
import ShopMenu from '../../Components/ShopMenu/ShopMenu.component'
import ShopMobileMenu from '../../Components/ShopMobileMenu/ShopMobileMenu.component'
import ShopItemsContainer from '../../Components/ShopItemsContainer/ShopItemsContainer.component'

const Shop = () => {

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
                <ShopItemsContainer />
            </div>
        </div>
    )
}

export default withRouter(Shop);