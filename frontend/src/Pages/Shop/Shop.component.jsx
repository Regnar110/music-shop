import './shop.styles.scss'
import { withRouter, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import BreakFromTop from '../../Components/BreakFromTop/BreakFromTop.component'
import ShopMenu from '../../Components/ShopMenu/ShopMenu.component'
import ShopMobileMenu from '../../Components/ShopMobileMenu/ShopMobileMenu.component'
import ShopItemsContainer from '../../Components/ShopItemsContainer/ShopItemsContainer.component'

const Shop = () => {

    const windowWidth = window.innerWidth
    let { shopId } = useParams();

    const [category, setCategory ] = useState('')

    useEffect(() => {
        if(shopId === undefined) {
            setCategory('All albums')
        }else {
          setCategory(shopId)  
        }
        
        return () => {
            setCategory('')
        }
    }, [setCategory, shopId])

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
                <ShopItemsContainer category={category}/>
            </div>
        </div>
    )
}

export default withRouter(Shop);