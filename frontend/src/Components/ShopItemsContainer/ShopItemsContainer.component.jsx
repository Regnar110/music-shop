import './shopitemscontainer.styles.scss'
import { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'

const ShopItemsContainer = () => {
    let { shopId } = useParams();
    
    const [ category, setCategory ] = useState('')

    useEffect(() => {
        setCategory(shopId)
        return () => {
            setCategory('')
        }
    }, [setCategory, shopId])

    return (
        <div>
            {
                category === undefined ? 
                (
                    <div>main page shop</div>
                )
                :
                (
                    <div>{category}</div>
                )
            }
        </div>
    )
}

export default withRouter(ShopItemsContainer)