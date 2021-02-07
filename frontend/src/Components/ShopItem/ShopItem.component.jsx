import './shopitem.scss'
import addtocart from '../../Assets/ShopItem/addtocart.svg'

const ShopItem = ({ product }) => {

    const {author, album, price, albumPicture} = product;

    return(
        <div className='shop-item-card'>
            <img alt='album' src={albumPicture}/>
            <div className='shop-item-buttons'>
                <button className='check-item-btn'>Check</button>
                <button className='add-to-cart-btn'><img alt='add item to cart' src={addtocart}/></button>
            </div>
            <div className='shop-item-card-description'>
                <span>{author} - {album}</span>
                <span>${price}</span>
            </div>
        </div>
    )
}

export default ShopItem;